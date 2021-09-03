export default {
  methods: {
    link (componentData) {
      this.handleLink(componentData.link, componentData.linkType)
    },
    buttonlink (componentData) {
      this.handleLink(componentData.buttonlink, componentData.buttonLinkType)
    },
    // TODO: need to use this common method instead of using the above two separate methods for handling links
    handleLink (link, linkType) {
      if (link) {
        if (linkType === 'link' || linkType === 'internalLink') {
          let splittedlink = link.split('/');
          let linkRoute = splittedlink[splittedlink.length - 1];
          this.$router.push(this.localizedRoute(`/${linkRoute}`))
          // condition handles the link types of url and external link
        } else if (linkType !== '') {
          let url = link.match(/^https?:/) ? link : 'https://' + link;
          window.open(url, '_self');
        }
      }
    }
  }
}
