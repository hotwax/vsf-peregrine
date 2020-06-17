export default {
  methods: {
    link (componentData) {
      if (componentData.link && componentData.linkType !== '') {
        if (componentData.linkType === 'link' || componentData.linkType === 'internalLink') {
          let splittedlink = componentData.link.split('/');
          let linkRoute = splittedlink[splittedlink.length - 1];
          this.$router.push(this.localizedRoute(`/${linkRoute}`))
        } else {
          let url = componentData.link.match(/^https?:/) ? componentData.link : 'https://' + componentData.link;
          window.open(url, '_self');
        }
      }
    },
    buttonlink (componentData) {
      if (componentData.buttonlink && componentData.buttonLinkType !== '') {
        if (componentData.buttonLinkType === 'internalLink') {
          let splittedlink = componentData.buttonlink.split('/');
          let linkRoute = splittedlink[splittedlink.length - 1];
          this.$router.push(this.localizedRoute(`/${linkRoute}`))
        } else {
          let url = componentData.buttonlink.match(/^https?:/) ? componentData.buttonlink : 'https://' + componentData.buttonlink;
          window.open(url, '_self');
        }
      }
    }
  }
}
