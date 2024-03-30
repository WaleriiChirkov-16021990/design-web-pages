export default {
  state: {
    listOfCards: [
      { id: 1, src: require('../../assets/img/blog/news_photo1.png'), alt: 'news photo', tag: 'Kitchan Design', title: 'Let’s Get Solution For Building Construction Work', date: '26 December,2022' },
      { id: 2, src: require('../../assets/img/blog/news_photo2.png'), alt: 'news photo', tag: 'Living Design', title: 'Low Cost Latest Invented Interior Designing Ideas.', date: '22 December,2022' },
      { id: 3, src: require('../../assets/img/blog/news_photo3.png'), alt: 'news photo', tag: 'Interior Design', title: 'Best For Any Office & Business Interior Solution', date: '25 December,2022' },
      { id: 4, src: require('../../assets/img/blog/news_photo4.png'), alt: 'news photo', tag: 'Kitchan Design', title: 'Let’s Get Solution For Building Construction Work', date: '26 December,2022' },
      { id: 5, src: require('../../assets/img/blog/news_photo5.png'), alt: 'news photo', tag: 'Living Design', title: 'Low Cost Latest Invented Interior Designing Ideas.', date: '22 December,2022' },
      { id: 6, src: require('../../assets/img/blog/news_photo6.png'), alt: 'news photo', tag: 'Interior Design', title: 'Best For Any Office & Business Interior Solution', date: '25 December,2022' },
    ],
    listOfLatestPosts: [
      {
        id: 1,
        src: require("@/assets/img/blog/LatestPost.png"),
        alt: "post image",
        title: " Low Cost Latest Invented Interior Designing Ideas",
        firstparagraph:
          " Lorem ipsum dolor sit amet, adipiscing Aliquam eusem vitae turpis dignissim maximus.posuere in. Contrary to popular belief.",
        secondparagraph:
          "Lorem Ipsum is not simply random text. It has roots in a piece of classica.",
        date: "26 December,2022",
      }
    ],
  },
  getters:{
    getListOfCards(state){
      return state.listOfCards;
    },
    getlistOfLatestPosts(state) {
      return state.listOfLatestPosts;
    }
  }

}
