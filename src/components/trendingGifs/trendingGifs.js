import useNearScreen from "hooks/useNearScreen";
import React, { Suspense } from "react";
import Loader from "components/ContentLoader/loadingContent";


    const LazyTrendingGifs = () => {
        const TrendingGifs = React.lazy(() => import("./trendingGifList"));
        const {isNearScreen, fromRef} = useNearScreen({distance: "10px", once: false});
            return (
                <div ref={fromRef}>
                    <Suspense fallback={<Loader/>}>
                        {(isNearScreen) ? <TrendingGifs /> : <Loader/>}
                    </Suspense>
                </div>
            )
    }
export default LazyTrendingGifs;