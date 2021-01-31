import React from "react";
import Layout from "../../../components/persona/layout-p5r";
import SEO from "../../../components/seo";

export default function IndexPage() {
    return (
        <Layout>
            <main>
                <SEO override={"February - Persona 5 Royal"}/>
                <div>
                    <div>
                        <h2>February</h2>
                    </div>
                    <div className="day">
                        <h3>Wed 2/1</h3>
                        <h4>Daytime</h4>
                        <ul>
                            <li>Free Time</li>
                        </ul>
                        <h4>Evening</h4>
                        <ul>
                            <li>Free Time</li>
                        </ul>
                    </div>
                    <div className="day">
                        <h3>Thu 2/2</h3>
                        <h4>Daytime</h4>
                        <ul>
                            <li>Faith Rank 11</li>
                        </ul>
                        <h4>Evening</h4>
                        <ul>
                            <li>Do not accept his deal</li>
                            <li>Justice Rank 11 <strong>(Auto)</strong></li>
                        </ul>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
