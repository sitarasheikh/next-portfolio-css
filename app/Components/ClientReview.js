// import React from 'react';
// import './styles/ClientReview.css'; // Importing the vanilla CSS file

// interface Props {
//   name: string;
//   role: string;
//   image: string;
// }

// const ClientReview = ({ name, role, image }: Props) => {
//   return (
//     <div className="review-container">
//       <img
//         src={image}
//         alt={name}
//         className="client-image"
//       />
//       <div className="star-icons">
//         <span className="star-icon"></span>
//         <span className="star-icon"></span>
//         <span className="star-icon"></span>
//         <span className="star-icon"></span>
//         <span className="star-icon"></span>
//       </div>
//       <h1 className="client-name">{name}</h1>
//       <p className="client-role">{role}</p>
//       <p className="review-text">
//         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non minima sequi officia recusandae quibusdam tempore odio vero aspernatur, consequuntur optio mollitia dicta, suscipit magni dolore?
//       </p>
//     </div>
//   );
// };

// export default ClientReview;

import React from 'react';
import './styles/ClientReview.css'; // Importing the vanilla CSS file

const ClientReview = ({ name, role, image }) => {
  return (
    <div className="review-container">
      <img
        src={image}
        alt={name}
        className="client-image"
      />
      <div className="star-icons">
        <span className="star-icon"></span>
        <span className="star-icon"></span>
        <span className="star-icon"></span>
        <span className="star-icon"></span>
        <span className="star-icon"></span>
      </div>
      <h1 className="client-name">{name}</h1>
      <p className="client-role">{role}</p>
      <p className="review-text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non minima sequi officia recusandae quibusdam tempore odio vero aspernatur, consequuntur optio mollitia dicta, suscipit magni dolore?
      </p>
    </div>
  );
};

export default ClientReview;
