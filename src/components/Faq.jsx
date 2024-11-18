
const Faq = () => {
    return (
        <div className="pb-10">
            <div className="card bg-base-100 p-6 m-10">
                <h1 className="text-3xl text-center text-purple-600 font-bold my-6">A frequently asked questions (FAQ)</h1>
                <div className="collapse collapse-arrow bg-base-200 mb-3">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium"> What types of clothes can I donate?</div>
                    <div className="collapse-content">
                        <p>We accept clean and gently used or new winter clothing, such as jackets, sweaters, shawls, scarves, gloves, and blankets. All sizes for adults and children are welcome.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200 mb-3">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">Where can I drop off my donations?</div>
                    <div className="collapse-content">
                        <p>You can drop off your donations at our designated collection points across Bangladesh. Visit our Collection Points page for addresses and locations near you.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200 mb-3">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium"> Can I donate money instead of clothes?</div>
                    <div className="collapse-content">
                        <p>Yes, financial contributions are greatly appreciated. These funds help us buy new clothes, blankets, and cover distribution expenses. Visit our Donate Now page for details on how to contribute.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200 mb-3">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium"> Can I organize a collection drive in my area?</div>
                    <div className="collapse-content">
                        <p>Absolutely! We encourage local initiatives. Contact us via email or phone to discuss how we can support your efforts in organizing a collection drive.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200 mb-3">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium"> Who benefits from the donations?</div>
                    <div className="collapse-content">
                        <p>Your donations directly help underprivileged individuals and families in rural and urban areas across Bangladesh who struggle to stay warm during winter.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200 mb-3">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium"> How do I know my contributions are making an impact?</div>
                    <div className="collapse-content">
                        <p>We share regular updates, photos, and success stories on our website and social media channels, so you can see how your donations are changing lives.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;