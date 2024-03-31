export default {
  state: {
    listOfBlogs: [
      { id: 1, tag: 'Kitchan Design', title: 'Let’s Get Solution For Building Construction Work', date: '26 December,2022', src: require('../../assets/img/home/blog-photo1.png'), alt: 'photo' },
      { id: 2, tag: 'Living Design', title: 'Low Cost Latest Invented Interior Designing Ideas.', date: '22 December,2022 ', src: require('../../assets/img/home/blog-photo2.png'), alt: 'photo' },
      { id: 3, tag: 'Interior Design', title: 'Best For Any Office & Business Interior Solution', date: '25 December,2022 ', src: require('../../assets/img/home/blog-photo3.png'), alt: 'photo' }
    ]
  },
  getters: {
    getlistOfBlogs (state) {
      return state.listOfBlogs
    }
  }
}
