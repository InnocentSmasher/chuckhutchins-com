import React from "react";
import MediaLayout from "/src/components/media-consumption/MediaLayout";
import SEO from "/src/components/seo";
import ReturnToLink from "/src/components/media-consumption/ReturnToLink";
import MediaList from "../../../components/media-consumption/MediaList"
import JSONData from "../../../../content/video-game-list.json";

export default function IndexPage() {
    return (
        <MediaLayout>
            <SEO override={"Video Games - Media Consumption"}/>
            <main className="media-consumption">
                <div>
                    <h2>Video Games</h2>
                    <p>Hey, this is all the stuff I've played since 2020.</p>
                </div>
                <div>
                    <h3>Jump down to:</h3>
                    <ul className="list">
                        <li><a href="#in-progress">In Progress</a></li>
                        <li><a href="#finished">Finished</a></li>
                        <li><a href="#abandoned">Abandoned</a></li>
                    </ul>
                </div>
                <div>
                    <ReturnToLink page="media consumption" />
                </div>
                <div className="hr--mini"/>
                <div className="media-consumption__media">
                    <MediaList mediaList={JSONData} />
                </div>
                <div className="hr--mini"/>
                <div>
                    <ReturnToLink page="media consumption" />
                </div>
            </main>
        </MediaLayout>
    );
}
