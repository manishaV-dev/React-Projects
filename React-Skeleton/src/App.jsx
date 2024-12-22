// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useEffect, useState } from "react";
import "./App.css";
import Skeleton from "./skeleton/Skeleton";

function App() {
  const [loadingState, setLoadingState] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadingState(true);
    }, 2000);
  }, []);

  return (
    <>
      <h1>React Skeleton Loading...</h1>
      <div>
        <h2>Heading Skeleton</h2>

        {loadingState ? (
          <div className="heading">
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
          </div>
        ) : (
          <div className="skeleton-container">
            <Skeleton width={`200px`} height={`38px`} />
            <Skeleton width={`150px`} height={`28px`} />
            <Skeleton width={`100px`} height={`25px`} />
          </div>
        )}

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

        <h2>Card Skeleton</h2>
        <div className="cardBlock">
          <div className="cardSkeleton">
            <div className="cardImage">
              <Skeleton width={`80px`} height={`80px`} variant={`circle`} />
              <Skeleton width={`100%`} height={`20px`} />
            </div>

            <div className="cardTitle">
              <Skeleton width={`100%`} height={`30px`} />
            </div>

            <div className="cardBody">
              <Skeleton width={`250px`} height={`300px`} />
            </div>
          </div>

          <div className="cardSkeleton">
            <div className="cardImage">
              <Skeleton width={`80px`} height={`80px`} variant={`circle`} />
              <Skeleton width={`100%`} height={`20px`} />
            </div>

            <div className="cardTitle">
              <Skeleton width={`100%`} height={`30px`} />
            </div>

            <div className="cardBody">
              <Skeleton width={`250px`} height={`300px`} />
            </div>
          </div>

          <div className="cardSkeleton">
            <div className="cardImage">
              <Skeleton width={`80px`} height={`80px`} variant={`circle`} />
              <Skeleton width={`100%`} height={`20px`} />
            </div>

            <div className="cardTitle">
              <Skeleton width={`100%`} height={`30px`} />
            </div>

            <div className="cardBody">
              <Skeleton width={`250px`} height={`300px`} />
            </div>
          </div>

          <div className="cardSkeleton">
            <div className="cardImage">
              <Skeleton width={`80px`} height={`80px`} variant={`circle`} />
              <Skeleton width={`100%`} height={`20px`} />
            </div>

            <div className="cardTitle">
              <Skeleton width={`100%`} height={`30px`} />
            </div>

            <div className="cardBody">
              <Skeleton width={`250px`} height={`300px`} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
