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
          let linkRoute;

          // used the if condition to check if we have colletions in the link and if yes then directly set router to the link
          if (link.includes('/collections/')) {
            linkRoute = link.substring(1);
          } else {
            // Used split to create an array to create a proper route link for static pages
            let splittedlink = link.split('/');
            linkRoute = splittedlink[splittedlink.length - 1];
          }

          this.$router.push(this.localizedRoute(`/${linkRoute}`))
          // condition handles the link type of url and also checks for empty link
        } else if (linkType !== '') {
          let url = link.match(/^https?:/) ? link : 'https://' + link;
          window.open(url, '_self');
        }
      }
    }
  }
}
