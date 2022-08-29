import React from 'react';
import ContentLoader from "react-content-loader";

function LoadingBlock() {
    return (
        <ContentLoader className="pizza-block"
                       speed={2}
                       width={280}
                       height={460}
                       viewBox="0 0 280 460"
                       backgroundColor="#f3f3f3"
                       foregroundColor="#ecebeb"

        >
            <circle cx="136" cy="147" r="118"/>
            <rect x="0" y="290" rx="0" ry="0" width="280" height="24"/>
            <rect x="0" y="327" rx="6" ry="6" width="280" height="84"/>
            <rect x="0" y="429" rx="0" ry="0" width="280" height="44"/>
        </ContentLoader>
    );
};

export default LoadingBlock;