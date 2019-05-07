import { computed, observable } from "mobx";
import { Alert } from "react-native";

export class Store {
  //export const FEED_DATA = [
  @observable FEED_DATA: any = [
    {
      likes: 250,
      name: "Galaxy",
      isLikeButtonClicked: "false",
      date: "31 DECEMBER",
      quotes: "Appreciate what you have before it turns into what you had!",
      comments: "View all 260 comments",
      link: `http://mediad.publicbroadcasting.net/p/kwit/files/styles/large/public/201804/mwg_.jpg`
    },
    {
      likes: 200,
      name: "Moon",
      isLikeButtonClicked: "false",
      date: "29 DECEMBER",
      quotes: "Joy of nature!",
      comments: "View all 100 comments",
      link: `https://i.ytimg.com/vi/u4ZKVXoGe2w/maxresdefault.jpg`
    },
    {
      likes: 150,
      name: "Stars",
      isLikeButtonClicked: "false",
      date: "25 DECEMBER",
      quotes: "Explore!!!",
      comments: "View all 68 comments",
      link: `https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzEwMC82Mjkvb3JpZ2luYWwvc2F1c2FnZS1tZXJnZXIuanBn`
    },
    {
      likes: 199,
      name: "MilkyWay",
      isLikeButtonClicked: "false",
      date: "20 DECEMBER",
      quotes: "Unheard Silence!",
      comments: "View all 200 comments",
      link: `https://i.ytimg.com/vi/EsS-tu12Z_4/maxresdefault.jpg`
    },
    {
      likes: 250,
      name: "Galaxy",
      isLikeButtonClicked: "false",
      date: "15 DECEMBER",
      quotes: "Appreciate what you have before it turns into what you had!",
      comments: "View all 260 comments",
      link: `https://www.nasa.gov/sites/default/files/thumbnails/image/potw1722a.jpg`
    },
    {
      likes: 250,
      name: "Galaxy",
      isLikeButtonClicked: "false",
      date: "10 DECEMBER",
      quotes: "Appreciate what you have before it turns into what you had!",
      comments: "View all 260 comments",
      link: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTprOPj_sG6Ui3H-b3OGa-gCwIuTcEX0RBgSc-o6Z_m9CX5iH55`
    },
    {
      likes: 250,
      name: "Galaxy",
      isLikeButtonClicked: "false",
      date: "5 DECEMBER",
      quotes: "Appreciate what you have before it turns into what you had!",
      comments: "View all 260 comments",
      link: `https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80`
    },
    {
      likes: 250,
      name: "Galaxy",
      isLikeButtonClicked: "false",
      date: "1 DECEMBER",
      quotes: "Appreciate what you have before it turns into what you had!",
      comments: "View all 260 comments",
      link: `http://mediad.publicbroadcasting.net/p/kwit/files/styles/large/public/201804/mwg_.jpg`
    },
    {
      likes: 200,
      name: "Moon",
      isLikeButtonClicked: "false",
      date: "10 DECEMBER",
      quotes: "Joy of nature!",
      comments: "View all 100 comments",
      link: `https://i.ytimg.com/vi/u4ZKVXoGe2w/maxresdefault.jpg`
    },
    {
      likes: 150,
      name: "Stars",
      isLikeButtonClicked: "false",
      date: "13 NOVEMBER",
      quotes: "Explore!!!",
      comments: "View all 68 comments",
      link: `https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzEwMC82Mjkvb3JpZ2luYWwvc2F1c2FnZS1tZXJnZXIuanBn`
    },
    {
      likes: 199,
      name: "MilkyWay",
      isLikeButtonClicked: "false",
      date: "11 NOVEMBER",
      quotes: "Unheard Silence!",
      comments: "View all 200 comments",
      link: `https://i.ytimg.com/vi/EsS-tu12Z_4/maxresdefault.jpg`
    },
    {
      likes: 250,
      name: "Galaxy",
      isLikeButtonClicked: "false",
      date: "1 NOVEMBER",
      quotes: "Appreciate what you have before it turns into what you had!",
      comments: "View all 260 comments",
      link: `https://www.nasa.gov/sites/default/files/thumbnails/image/potw1722a.jpg`
    },
    {
      likes: 250,
      name: "Galaxy",
      isLikeButtonClicked: "false",
      date: "23 OCTOBER",
      quotes: "Appreciate what you have before it turns into what you had!",
      comments: "View all 260 comments",
      link: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTprOPj_sG6Ui3H-b3OGa-gCwIuTcEX0RBgSc-o6Z_m9CX5iH55`
    },
    {
      likes: 250,
      name: "Galaxy",
      isLikeButtonClicked: "false",
      date: "19 OCTOBER",
      quotes: "Appreciate what you have before it turns into what you had!",
      comments: "View all 260 comments",
      link: `https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80`
    },
    {
      likes: 250,
      name: "Galaxy",
      isLikeButtonClicked: "false",
      date: "2 OCTOBER",
      quotes: "Appreciate what you have before it turns into what you had!",
      comments: "View all 260 comments",
      link: `http://mediad.publicbroadcasting.net/p/kwit/files/styles/large/public/201804/mwg_.jpg`
    },
    {
      likes: 200,
      name: "Moon",
      isLikeButtonClicked: "false",
      date: "14 JUNE",
      quotes: "Joy of nature!",
      comments: "View all 100 comments",
      link: `https://i.ytimg.com/vi/u4ZKVXoGe2w/maxresdefault.jpg`
    },
    {
      likes: 150,
      name: "Stars",
      isLikeButtonClicked: "false",
      date: "12 JUNE",
      quotes: "Explore!!!",
      comments: "View all 68 comments",
      link: `https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzEwMC82Mjkvb3JpZ2luYWwvc2F1c2FnZS1tZXJnZXIuanBn`
    },
    {
      likes: 199,
      name: "MilkyWay",
      isLikeButtonClicked: "false",
      date: "10 JUNE",
      quotes: "Unheard Silence!",
      comments: "View all 200 comments",
      link: `https://i.ytimg.com/vi/EsS-tu12Z_4/maxresdefault.jpg`
    },
    {
      likes: 250,
      name: "Galaxy",
      isLikeButtonClicked: "false",
      date: "10 MARCH",
      quotes: "Appreciate what you have before it turns into what you had!",
      comments: "View all 260 comments",
      link: `https://www.nasa.gov/sites/default/files/thumbnails/image/potw1722a.jpg`
    },
    {
      likes: 250,
      name: "Galaxy",
      isLikeButtonClicked: "false",
      date: "30 APRIL",
      quotes: "Appreciate what you have before it turns into what you had!",
      comments: "View all 260 comments",
      link: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTprOPj_sG6Ui3H-b3OGa-gCwIuTcEX0RBgSc-o6Z_m9CX5iH55`
    },
    {
      likes: 250,
      name: "Galaxy",
      isLikeButtonClicked: "false",
      date: "24 APRIL",
      quotes: "Appreciate what you have before it turns into what you had!",
      comments: "View all 260 comments",
      link: `https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80`
    },
    {
      likes: 250,
      name: "Galaxy",
      isLikeButtonClicked: "false",
      date: "10 APRIL",
      quotes: "Appreciate what you have before it turns into what you had!",
      comments: "View all 260 comments",
      link: `http://mediad.publicbroadcasting.net/p/kwit/files/styles/large/public/201804/mwg_.jpg`
    },
    {
      likes: 200,
      name: "Moon",
      isLikeButtonClicked: "false",
      date: "23 MARCH",
      quotes: "Joy of nature!",
      comments: "View all 100 comments",
      link: `https://i.ytimg.com/vi/u4ZKVXoGe2w/maxresdefault.jpg`
    },
    {
      likes: 150,
      name: "Stars",
      isLikeButtonClicked: "false",
      date: "19 MARCH",
      quotes: "Explore!!!",
      comments: "View all 68 comments",
      link: `https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzEwMC82Mjkvb3JpZ2luYWwvc2F1c2FnZS1tZXJnZXIuanBn`
    },
    {
      likes: 199,
      name: "MilkyWay",
      isLikeButtonClicked: "false",
      date: "18 MARCH",
      quotes: "Unheard Silence!",
      comments: "View all 200 comments",
      link: `https://i.ytimg.com/vi/EsS-tu12Z_4/maxresdefault.jpg`
    },
    {
      likes: 250,
      name: "Galaxy",
      isLikeButtonClicked: "false",
      date: "10 MARCH",
      quotes: "Appreciate what you have before it turns into what you had!",
      comments: "View all 260 comments",
      link: `https://www.nasa.gov/sites/default/files/thumbnails/image/potw1722a.jpg`
    },
    {
      likes: 250,
      name: "Galaxy",
      isLikeButtonClicked: "false",
      date: "10 MARCH",
      quotes: "Appreciate what you have before it turns into what you had!",
      comments: "View all 260 comments",
      link: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTprOPj_sG6Ui3H-b3OGa-gCwIuTcEX0RBgSc-o6Z_m9CX5iH55`
    },
    {
      likes: 250,
      name: "Galaxy",
      isLikeButtonClicked: "false",
      date: "10 MARCH",
      quotes: "Appreciate what you have before it turns into what you had!",
      comments: "View all 260 comments",
      link: `https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80`
    }
  ];
  //export const OPTIONS = [
  @observable OPTIONS: any = [
    { iconName: "person-add", text: "Follow and Invite Friends" },
    { iconName: "notifications-none", text: "Notifications" },
    { iconName: "lock-outline", text: "Privacy and Security" },
    { iconName: "credit-card", text: "Payments" },
    { iconName: "speaker-phone", text: "Ads" },
    { iconName: "account-circle", text: "Account" },
    { iconName: "help-outline", text: "Help" },
    { iconName: "info-outline", text: "About" }
  ];
  //export const DRAWER_OPTIONS = [
  @observable DRAWER_OPTIONS: any = [
    {
      iconFamily: "MaterialCommunityIcons",
      iconName: "progress-clock",
      text: "Your Activity"
    },
    {
      iconFamily: "MaterialCommunityIcons",
      iconName: "camera-metering-matrix",
      text: "Nametag"
    },

    { iconFamily: "MaterialIcons", iconName: "label-outline", text: "Saved" },
    { iconFamily: "MaterialIcons", iconName: "menu", text: "Close Friends" },
    {
      iconFamily: "MaterialIcons",
      iconName: "person-add",
      text: "Discover People"
    },
    {
      iconFamily: "MaterialCommunityIcons",
      iconName: "facebook-box",
      text: "Open Facebook"
    }
  ];
  @observable STORY_POSTED_BY = [
    "Galaxy",
    "Stars",
    "Planets",
    "MilkyWay",
    "Moon",
    "Thunder",
    "Sky",
    "Meteroids",
    "Sprinkles"
  ];

  @observable COMMENTS_ARRAY = [
    { name: "Moon", comment: "Beauty" },
    { name: "Stars", comment: "Creation of God!" },
    {
      name: "Galaxy!!",
      comment: "Lovely to see how much beautiful is our galaxy!"
    },
    {
      name: "Planets",
      comment: "Stars are beyond your reach but Shine is within you!"
    },
    { name: "Sun", comment: "Lovely" },
    { name: "Planets", comment: "Beauty" }
  ];

  @observable onButtonPress = (item: any) => {
    item.isLikeButtonClicked = !item.isLikeButtonClicked;
    !item.isLikeButtonClicked
      ? (item.likes = item.likes + 1)
      : (item.likes = item.likes - 1);
  };
}
export default new Store();
