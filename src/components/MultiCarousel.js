import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Image, Card } from "semantic-ui-react";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const styles = {
     img: 'padding: 100px'
   
};
const land = "../../land.jpg";
const image2 = "../../Igbo/Igbo Community of HaShem.jpg";
const image3 = "../../Pashtun/testpash_update.jpg";
const image4 = "../../Shinto/shinto.jpg";
const image1 =
  "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";
export default class MultiCarousel extends Component {
  render() {
    return (
      <div>
        <Carousel
        //   style={styles}
          partialVisbile={true}
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={false}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024
              },
              items: 3,
              paritialVisibilityGutter: 40
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0
              },
              items: 1,
              paritialVisibilityGutter: 30
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464
              },
              items: 2,
              paritialVisibilityGutter: 30
            }
          }}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <div style={{ paddingRight: '4px', paddingLeft: '4px', backgroundImage: `url(${image1})`, height:"350px", width:"600px"   }}>
          
           <Card style={{ opacity: "",  width: '100%', paddingTop: '0em', height: '1px', marginTop: '0em'  }}>
     <Card.Content
       style={{
    
       }}
     >
       <Card.Header style={{
         paddingTop: '5.5em',
         fontSize: '2em',
         color: 'white'
       }}>Mapping the Story</Card.Header>
       <Card.Meta>
         {/* <span className='date'>Joined in 2015</span> */}
       </Card.Meta>
        <Card.Content extra style={{
          paddingTop: '1em',
          paddingBottom: '1em'
        }}>
     </Card.Content>
       <Card.Description
        style={{
            color: 'white'
        }}
       >
       iTribe is creating a comprehensive database from across the globe of the multitudes of people who have had or are just discovering their desire to somehow join the phenomenon of Israel. Our mapping will cover both individuals and communities that are currently looking towards Israel as part of their identity.
       </Card.Description>
     </Card.Content>
    
     {/* <Image floated="right" src={pashtun} wrapped ui={false} /> */}
   </Card>
          </div>
          <div style={{ paddingRight: '4px', paddingLeft: '4px', backgroundImage: `url(${land})`, height:"350px", width:"600px"   }}>
          
           <Card style={{ opacity: "",  width: '100%', paddingTop: '0em', height: '1px', marginTop: '0em'  }}>
     <Card.Content
       style={{
    
       }}
     >
       <Card.Header style={{
         paddingTop: '5.5em',
         fontSize: '2em',
         color: 'white'
       }}>Mapping the Story</Card.Header>
       <Card.Meta>
         {/* <span className='date'>Joined in 2015</span> */}
       </Card.Meta>
        <Card.Content extra style={{
          paddingTop: '1em',
          paddingBottom: '1em'
        }}>
     </Card.Content>
       <Card.Description
        style={{
            color: 'white'
        }}
       >
       iTribe is creating a comprehensive database from across the globe of the multitudes of people who have had or are just discovering their desire to somehow join the phenomenon of Israel. Our mapping will cover both individuals and communities that are currently looking towards Israel as part of their identity.
       </Card.Description>
     </Card.Content>
    
     {/* <Image floated="right" src={pashtun} wrapped ui={false} /> */}
   </Card>
          </div>
          <div style={{ paddingRight: '4px', paddingLeft: '4px', backgroundImage: `url(${image4})`, backgroundRepeat: 'no-repeat', height:"350px", width:"600px"   }}>
          
          <Card style={{ opacity: "",  width: '100%', paddingTop: '0em', height: '1px', marginTop: '0em'  }}>
    <Card.Content
      style={{
   
      }}
    >
      <Card.Header style={{
        paddingTop: '5.5em',
        fontSize: '2em',
        color: 'white'
      }}>Igbo - Nigeria, Africa
      <br />
      <span
        style={{
            fontSize: '.9em'
        }}
      >32 Million</span>
      
      </Card.Header>
       <Card.Content extra style={{
         paddingTop: '1em',
         paddingBottom: '1em'
       }}>
    </Card.Content>
      <Card.Description
       style={{
           color: 'white'
       }}
      >
      Igbo hold deep traditions of Jewish identify & maintain a strong suite of religious custom that has deep overlap to Judaic tradition. Today, Igbo leaders are taking an public stance with Israel.
      </Card.Description>
    </Card.Content>
   
  </Card>
         </div>
          <div>
            <Image height="350px" width="600px" style={{
                borderRadius: '4px',
                paddingRight: '4px',
                paddingLeft: '4px'
            }} src={land} />
          </div>
          <div>
            <Image height="350px" width="600px" style={{
                borderRadius: '4px',
                paddingRight: '4px',
                paddingLeft: '4px'
            }} src={image2} />
          </div>
          <div>
            <Image height="350px" width="600px" style={{
                borderRadius: '4px',
                paddingRight: '4px',
                paddingLeft: '4px'
            }} src={image3} />
          </div>
          <div>
            <Image height="350px" width="600px" style={{
                borderRadius: '4px',
                paddingRight: '4px',
                paddingLeft: '4px'
            }} src={image4} />
          </div>
        </Carousel>
      </div>
    );
  }
}
