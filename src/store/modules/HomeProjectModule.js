export default {
  state: {
    listOfProjects: [
      {
        id: 'first-project', src: require('../../assets/img/home/project-photo1.png'), alt: 'first project', firstparagraph: 'Modern Kitchen', secondparagraph: 'Decor / Artchitecture'
      },
      {
        id: 'second-project', src: require('../../assets/img/home/project-photo2.png'), alt: 'second project', firstparagraph: 'Modern Kitchen', secondparagraph: 'Decor / Artchitecture'
      },
      {
        id: 'third-project', src: require('../../assets/img/home/project-photo3.png'), alt: 'third project', firstparagraph: 'Modern Kitchen', secondparagraph: 'Decor / Artchitecture'
      },
      {
        id: 'fourth-project', src: require('../../assets/img/home/project-photo4.jpg'), alt: 'fourth project', firstparagraph: 'Modern Kitchen', secondparagraph: 'Decor / Artchitecture'
      }
    ]
  },
  getters: {
    getListOfProjects (state) {
      return state.listOfProjects
    }
  }
}
