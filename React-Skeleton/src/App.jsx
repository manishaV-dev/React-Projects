// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Skeleton from "./skeleton/Skeleton";

function App() {
  return (
    <>
      <h1>React Skeleton Loading...</h1>
      <div>
        <h2>Heading Skeleton</h2>
        <div className="skeleton-container">
          <Skeleton width={`200px`} height={`38px`} />
          <Skeleton width={`150px`} height={`28px`} />
          <Skeleton width={`100px`} height={`25px`} />
        </div>
        <h2>Content Skeleton</h2>
        <div className="content-skeleton">
          <div className="skeleton-container">
            <Skeleton width={`300px`} height={`28px`} />
            <Skeleton height={`12px`} variant={`paragraph`} />
            <Skeleton height={`12px`} variant={`paragraph`} />
            <Skeleton height={`12px`} variant={`paragraph`} />
            <Skeleton height={`12px`} variant={`paragraph`} />
            <Skeleton width={`50%`} height={`18px`} variant={`paragraph`} />
          </div>

          <div className="skeleton-container">
            <Skeleton width={`300px`} height={`28px`} />
            <Skeleton height={`12px`} variant={`paragraph`} />
            <Skeleton height={`12px`} variant={`paragraph`} />
            <Skeleton height={`12px`} variant={`paragraph`} />
            <Skeleton height={`12px`} variant={`paragraph`} />
            <Skeleton width={`50%`} height={`18px`} variant={`paragraph`} />
          </div>

          <div className="skeleton-container">
            <Skeleton width={`300px`} height={`28px`} />
            <Skeleton height={`12px`} variant={`paragraph`} />
            <Skeleton height={`12px`} variant={`paragraph`} />
            <Skeleton height={`12px`} variant={`paragraph`} />
            <Skeleton height={`12px`} variant={`paragraph`} />
            <Skeleton width={`50%`} height={`18px`} variant={`paragraph`} />
          </div>
          
        </div>
      </div>
    </>
  );
}

export default App;
