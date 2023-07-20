
const About = () => {
    return (
        <div class="about_section layout_padding">
            <div class="container">
                <div class="about_section_2">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="image_2"><img src="images/img-2.png" alt="nice" /></div>
                        </div>
                        <div class="col-md-6">
                            <h1 class="about_taital">About Us</h1>
                            <p class="about_text">We are a family run business with over 30 years of experience in the furniture retail industry

                                We offer a large range of quality sofas, stylish dining tables, plus functional occasional and bedroom furniture, brought to you from some of the UK’s leading furniture stores, but you pay only a fraction of the high street price!

                                Do you appreciate good old fashioned customer service, from people who take time to listen and understand your needs? Then you really should get in touch. We aim to fulfil our customers needs making your house a home. so pop in for a chat, I think we’ll get on just fine. </p>
                            <div class="readmore_bt"><button onClick={() => console.log('Button clicked!')} style={{ textDecoration: 'underline', color: 'blue', border: 'none', backgroundColor: 'transparent', cursor: 'pointer' }}>
                                Read more
                            </button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;