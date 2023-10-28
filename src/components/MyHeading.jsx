const MyHeading = ({name, text, price=200 }) => {


    const obj={
        abb:12,
        cdd:2325,
    };

    const {abb, cdd} = obj; // destructuring

    const a = text
  return (
    <>
    <h1>{name}</h1>
    <MyHeadingLittle value={price}/>
    <div>MyHeading</div>
    <div>{a}</div>
    <main>this is main</main>
    <footer>Footer </footer>
    </>
  );
}
const MyHeadingLittle = ({value}) =>  <h4>{value}</h4>;
const MyHeadingLittle2 = () =>  <h3>heading littlev kyu</h3>;
const MyHeadingLittle3 = () =>  <h5>heading little hmym</h5>;
 

export default MyHeading;

export{ MyHeadingLittle, MyHeadingLittle2, MyHeadingLittle3}

