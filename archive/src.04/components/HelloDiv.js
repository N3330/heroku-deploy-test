// TODO: Fix the return statement so that it renders an `h1` heading tag that introduces the creator
function HelloDiv() {
  return (
    <div className="container">
      <h1>Hello I'm jimmmy your creator</h1>
      <p>Below are some of your overlords interests</p>
      <ul className="parent">
        <li>Poker</li>
        <li>Video Games</li>
        <li>Basketball</li>
        <li>Coding</li>
      </ul>
    </div>
  );

}

// TODO: Fix the export statement
// Export statements are ES6 syntax that tell Javascript what "thing" we want to make available outside of this file
export default HelloDiv;
