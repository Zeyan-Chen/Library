class Slider extends React.Component {
    constructor() {
        super();
        this.RefSlide = React.createRef();
        this.state = {
            slideW: null
        };
    }

    // lifeStyle
    // 全部 render 完畢後更新組件的時候
    componentDidUpdate() {
        const slide = this.RefSlide.current;
        slide.style.marginLeft = -this.state.slideW + 'px';
    }

    // render 完畢後
    componentDidMount() {
        const slide = this.RefSlide.current;
        const slideChild = this.RefSlide.current.childNodes;
        this.setState({ slideW: slideChild[0].offsetWidth });
        slide.prepend(slide.lastChild);
    }

    // Next, Prev
    whenClick = (e, callBack) => {
        console.log(e.currentTarget);
        const slide = this.RefSlide.current;
        slide.style.transition = 'all .3s ease-in-out';
        if (e.currentTarget.classList.contains('nextBtn')) {
            slide.style.transform = `translateX(${-this.state.slideW}px)`;
            setTimeout(() => {
                slide.style.transition = '';
                slide.style.transform = '';
                slide.appendChild(slide.firstChild);
            }, 300);
        } else {
            slide.style.transform = `translateX(${+this.state.slideW}px)`;
            setTimeout(() => {
                slide.style.transition = '';
                slide.style.transform = '';
                slide.prepend(slide.lastChild);
            }, 300);
        }
    };

    render() {
        return (
            <React.Fragment>
                <div className="slider">
                    <div className="carousel-container">
                        <div className="carousel-slide" ref={this.RefSlide}>
                            <img src="images/taeyeon_1.jpg" alt="" />
                            <img src="images/taeyeon_2.jpg" alt="" />
                            <img src="images/taeyeon_3.jpg" alt="" />
                        </div>
                    </div>
                    <div className="prevBtn" onClick={this.whenClick}>
                        <i class="fas fa-angle-left" />
                    </div>
                    <div className="nextBtn" onClick={this.whenClick}>
                        <i class="fas fa-angle-right" />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

window.addEventListener('load', () => {
    ReactDOM.render(
        <div className="container">
            <Slider />
            <Slider />
        </div>,
        document.body
    );
});
