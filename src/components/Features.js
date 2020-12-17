import React from 'react';
//import Carousel from 'react-images';
 
//const images = [{ src: 'D:\photos\zoo\fish.jpg' }, { src: 'D:\photos\zoo\bird.jpg' }];
 
class Features extends React.Component {
  render() {
  
      return(
      <div>
       <p>features are here</p>

       <div class="card">
         <div class="card-header">
           Featured
         </div>
         <div class="card-body">
           <h5 class="card-title">Special title treatment</h5>
           <p class="card-text">It's a broader card with text below as a natural lead-in to extra content. This content is a little longer.</p>
           <a href="#" class="btn btn-primary">Go somewhere</a>
         </div>
      </div>

      <div class="card-group">
  <div class="card">
    <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/img%20(50).jpg" alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">It's a broader card with text below as a natural lead-in to extra content. This content is a little longer.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/img%20(50).jpg" alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/img%20(50).jpg" alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">It's a broader card with text below as a natural lead-in to extra content. This content is a little longer.This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
</div>



    </div>
    );

  }
}
export default Features;
