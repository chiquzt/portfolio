import "./mainpage.scss";
function MainPage() {
    return (
        <>
            <div className="container" style={{ height: "100vh" }}>
                <div className="fake"></div>
                <div
                    className="main"
                    id="main"
                    style={{ backgroundColor: "#efece8" }}
                >
                    <div className="about">
                        <div className="n-cardwrap">
                            <div className="n-imgwrap">
                                <img src={require("./avatar.png")} alt="" />
                            </div>
                            <div className="name">Abby.Y</div>
                            {/* <div className="intro">1996</div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainPage;
