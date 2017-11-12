import React from 'react';
import PropTypes from 'prop-types';
import { Card,
         CardImgOverlay,
         CardImg } from 'reactstrap';

const cardStyle = {
  width: '200px',
  height: '200px',
  padding: '10px 30px 50px 30px'
};

const overlayStyle = {
 display: 'flex',
 justifyContent: 'center',
 alignItems: 'flex-end'
};

const labelContainerStyle = {
 backgroundColor: 'black',
 padding: '10px',
 opacity: '0.6',
 borderRadius: '15px'
};

const imgStyle = {
 maxHeight: '100%',
 maxWidth: '100%'
};

const titleStyle = {
 color: 'white'
};

const OptionCardControl = (details) => {
  return class OptionCard extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      let id = details.id;
      let imgUrl = details.imgUrl;
      let title = details.title;

       return (
         <Card id={id}
               style={cardStyle}>
           <CardImg style={imgStyle} src={imgUrl} alt="image" />
           <CardImgOverlay style={overlayStyle}>
             <div style={labelContainerStyle}>
               <h4 style={titleStyle}>{title}</h4>
             </div>
           </CardImgOverlay>
         </Card>
      );
    }
  };
}

OptionCardControl.propTypes = {
  details: PropTypes.object.isRequired
};

export default OptionCardControl;
