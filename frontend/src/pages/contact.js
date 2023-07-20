const Contact = () => {
    return (
        <div class="contact_section layout_padding">
            <div class="container">
                <div class="contact_section_2">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="mail_section_1">
                                <h1 class="contact_taital">Contact Us</h1>
                                <input type="text" class="mail_text" placeholder="Name" name="text" />
                                <input type="text" class="mail_text" placeholder="Email" name="text" />
                                <input type="text" class="mail_text" placeholder="Phone Number" name="text" />
                                <textarea class="massage-bt" placeholder="Massage" rows="5" id="comment"
                                    name="Massage"></textarea>
                                <div class="send_bt"><button onClick={() => console.log('Button clicked!')} style={{ textDecoration: 'underline', color: 'blue', border: 'none', backgroundColor: 'transparent', cursor: 'pointer' }}>
                                    SEND
                                </button></div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="map_main">
                                <div class="map-responsive">
                                    <iframe
                                        src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&amp;q=Eiffel+Tower+Paris+France"
                                        width="600"
                                        height="360"
                                        frameBorder="0"
                                        style={{ border: 0, width: '100%' }}
                                        allowFullScreen
                                        title="Google Maps - Eiffel Tower"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Contact;