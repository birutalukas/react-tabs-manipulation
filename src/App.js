import GlobalStyle from "./theme/globalStyles";

import { useState } from "react";
import {
    ContentDesktopLeft,
    ContentDesktopRight,
} from "./components/layout/Content";
import Container from "./components/layout/Container";
import {
    Tabs,
    Tab,
    TabTextContent,
    TabMedia,
    TabMediaTitle,
    TabCtaButton,
} from "./components/Tabs";

import LovedVideo from "./components/LovedVideo";
import poster from "./assets/images/image2.jpg";
import video from "./assets/images/videoExample.mp4";

import styled from "styled-components";

const Wrapper = styled.main`
    min-height: 100vh;
    width: 100%;
`;

const App = () => {
    const [active, setActive] = useState(0);

    const handleClick = (e) => {
        const index = parseInt(e.target.id, 0);
        if (index !== active) {
            setActive(index);
        }
    };

    return (
        <Wrapper>
            <GlobalStyle />
            <Container>
                <ContentDesktopLeft>
                    <header>
                        <h1>
                            Like every family,
                            <br />
                            we have a few values <br />
                            <span>that we hold dear</span>
                        </h1>

                        <Tabs>
                            <Tab
                                onClick={handleClick}
                                active={active === 0}
                                id={0}
                            >
                                Crafted
                            </Tab>

                            <Tab
                                onClick={handleClick}
                                active={active === 1}
                                id={1}
                            >
                                Trusted
                            </Tab>

                            <Tab
                                onClick={handleClick}
                                active={active === 2}
                                id={2}
                            >
                                Loved
                            </Tab>
                        </Tabs>
                    </header>

                    {active === 0 && (
                        <div>
                            <TabMedia>
                                <img
                                    src={require("./assets/images/image1.jpg")}
                                    alt="Crafted"
                                />
                                <TabMediaTitle>Loved</TabMediaTitle>
                            </TabMedia>
                            <TabTextContent>
                                <h2>
                                    Crafted
                                    <br /> <span>from day one</span>
                                </h2>
                                <p>
                                    As a household name that has been loved by
                                    all kinds of families for generations,
                                    Silver Cross will always be right there, by
                                    your side.
                                </p>
                                <TabCtaButton href="/">Learn More</TabCtaButton>
                            </TabTextContent>
                        </div>
                    )}

                    {active === 1 && (
                        <div>
                            <TabMedia>
                                <img
                                    src={require("./assets/images/gifExample.gif")}
                                    alt="Trusted"
                                />
                                <TabMediaTitle>Trusted</TabMediaTitle>
                            </TabMedia>
                            <TabTextContent>
                                <h2>
                                    Trusted
                                    <br /> <span>from day one</span>
                                </h2>
                                <p>
                                    As a household name that has been loved by
                                    all kinds of families for generations,
                                    Silver Cross will always be right there, by
                                    your side.
                                </p>
                                <TabCtaButton href="/">Learn More</TabCtaButton>
                            </TabTextContent>
                        </div>
                    )}

                    {active === 2 && (
                        <div>
                            <TabMedia>
                                <LovedVideo poster={poster} video={video} />
                                <TabMediaTitle>Loved</TabMediaTitle>
                            </TabMedia>
                            <TabTextContent>
                                <h2>
                                    Loved
                                    <br /> <span>from day one</span>
                                </h2>
                                <p>
                                    As a household name that has been loved by
                                    all kinds of families for generations,
                                    Silver Cross will always be right there, by
                                    your side.
                                </p>
                                <TabCtaButton href="/">Learn More</TabCtaButton>
                            </TabTextContent>
                        </div>
                    )}
                </ContentDesktopLeft>
                <ContentDesktopRight>
                    {active === 0 && (
                        <div>
                            <TabMedia desktop={true}>
                                <img
                                    src={require("./assets/images/image1.jpg")}
                                    alt="Crafted"
                                />
                                <TabMediaTitle>Crafted</TabMediaTitle>
                            </TabMedia>
                        </div>
                    )}
                    {active === 1 && (
                        <div>
                            <TabMedia desktop>
                                <img
                                    src={require("./assets/images/gifExample.gif")}
                                    alt="Trusted"
                                />
                                <TabMediaTitle>Trusted</TabMediaTitle>
                            </TabMedia>
                        </div>
                    )}
                    {active === 2 && (
                        <div>
                            <TabMedia desktop>
                                <LovedVideo poster={poster} video={video} />
                                <TabMediaTitle>Loved</TabMediaTitle>
                            </TabMedia>
                        </div>
                    )}
                </ContentDesktopRight>
            </Container>
        </Wrapper>
    );
};

export default App;
