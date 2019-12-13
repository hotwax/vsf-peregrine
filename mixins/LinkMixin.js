export default {
  methods: {
    link (componentData) {
      if (componentData.linkType === 'link' || componentData.linkType === 'internalLink') {
        let splittedlink = componentData.link.split('/');
        let linkRoute = splittedlink[splittedlink.length - 1];
        this.$router.push(this.localizedRoute(`/${linkRoute}`))
      } else {
        if (componentData.link) {
          let url = componentData.link.match(/^https?:/) ? componentData.link : 'https://' + componentData.link;
          window.open(url, '_self');
        }
        // window.open('https://' + componentData.link, '_blank');
      }
    }
  }
}
