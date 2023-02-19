import Spinner from "components/spinner/spinner";
import useNearScreen from "hooks/useNearScreen";
import React, { Suspense } from "react";

const TrendingGifs = React.lazy(() => import("./trendingGifList"))

    const LazyTrendingGifs = () => {
        const {isNearScreen, fromRef} = useNearScreen({distance: "0px"})
            return (
                <div className="trending-data-container" ref={fromRef}>
                    <Suspense fallback={<Spinner/>}>
                        {(isNearScreen) ? <TrendingGifs /> : <Spinner/>}
                    </Suspense>
                </div>
            )
    }
export default LazyTrendingGifs;