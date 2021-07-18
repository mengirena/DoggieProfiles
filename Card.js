'use strict';

// const e = React.createElement;

// class LikeButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { liked: false };
//   }

//   render() {
//     if (this.state.liked) {
//       return 'You liked this.';
//     }

//     return (
//       <button onClick={() => this.setState({ liked: true })}>
//       Like
//       </button>
//     );
//   }
// }
class Card extends React.Component{
  
  constructor(){
    super()
    this.state ={
      dogs:[
        { 
          dogId:1,
          dogName:"Marco",
          dogImg: "https://images.dog.ceo/breeds/kuvasz/n02104029_3942.jpg"
        },
        { 
          dogId:2,
          dogName:"Stefania",
          dogImg: "https://images.dog.ceo/breeds/terrier-bedlington/n02093647_322.jpg"
        },
        { 
          dogId:3,
          dogName:"Selmira",
          dogImg: "https://images.dog.ceo/breeds/elkhound-norwegian/n02091467_7363.jpg"
        }
      ]
    } 
    this.handleClickPrev = this.handleClickPrev.bind(this)
  }

  
  handleClickPrev(){
    console.log("clicked")
    
    this.setState(preState => {
      preState.dogs
      
    })

    let dogObj = {}
    // const ranName = "https://randomuser.me/api/"
    // const dogImg = "https://dog.ceo/api/breeds/image/random"
    
    // fetch(dogImg)
    // .then(res=>res.json())
    // .then(data=>console.log(data))

    Promise.all([fetch("https://randomuser.me/api/"),fetch("https://dog.ceo/api/breeds/image/random")])
    // Promise.all([fetch(ranName),fetch(dogImg)])
    .then(res => Promise.all(res.map(res=>res.json()))
                .then(data=>{
                    console.log("ranName",data[0].results[0].name.first)
                    console.log("dogImg", data[1].message)
                    dogObj.dogName = data[0].results[0].name.first
                    dogObj.dogImg = data[1].message
                    dogObj.dogId = 
                    console.log(dogObj)
                }))

  }
  // let name, img

  // fetchName(){
  //   Promise.all(fetch(ranName),fetch(dogImg))
  //   .then(res => Promise.all(res.map(res=>res.json()))
  //               .then(data=>{
  //                   console.log("ranName",data[0].results[0].name.first)
  //                   console.log("dogImg", data[1].message)
  //                   name = data[0].results[0].name.first
  //                   img = data[1].message
  //               }))
  // }
  
  render(){
    let result = []
    for (let i = 0 ; i < 3 ; i++ ){
      result.push( <div className="profile" key={this.state.dogs[i].dogId}><img src={this.state.dogs[i].dogImg} alt="" className="pic"/><p>{this.state.dogs[i].dogName}</p></div>)
    }
    
    console.log(result)
    return(
      <>
        {result}
        <button id="left" onClick={this.handleClickPrev}>👈🏼</button>
        <button id="right">👉🏼</button>
      </>
      
  
    )
  }
  
}

const domContainer = document.querySelector('#cat-basket');
ReactDOM.render(<Card />, domContainer);