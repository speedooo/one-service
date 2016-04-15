import React from 'react';
import {Header} from './header.jsx'
import {Navigation} from './navigation.jsx'


export class MainLayout extends React.Component {

  constructor(props) {

       super(props);

       this.state = {

           title: "THis is default title ONE"
       };

   }
  // var handleClick = function(i, props) {
  //   console.log('You clicked: ' + props.items[i]);
  // }

  render() {
    return (
      <div>
        <Header  title={this.state.title}/>

        <main>
              {this.props.content}
          </main>

        <Navigation />
      </div>
    )
  }
};

// export const MainLayout = ({content}) => (
//     <div>
//         <Header  title="TEST title"/>
//
//         <main>
//                     {content}
//         </main>
//
//         <Navigation />
//
//     </div>
// );
// MainLayout.propTypes = {
//   title: PropTypes.string
//
// };
