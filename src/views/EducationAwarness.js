import React from "react";

import Navbar from "components/Navbar.js";
import Footer from "components/Footer.js";
import BeatTheSummer from '../assets/img/beat-the-summer.png'
import Vaccination from '../assets/img/vaccination.png'
import PreventAnimalPoiling from '../assets/img/prevent-animal-poilin.png'
import Spaying from '../assets/img/spaying.png'
import CowMeatTrade from '../assets/img/cow-meat-trade.png'

export default function EducationAwarness() {
    return (
        <>
            <Navbar />
            <main>
                <section className="pb-20 bg-gray-300 -mt-24">
                    <div className="container mx-auto px-4">
                        {/* keep it as it is otherwise it will create a white gap */}
                        <div className="flex flex-wrap">
                        </div>
                        {/* ************************** */}

                        <div className="flex flex-wrap items-center mt-32">
                            <div className="w-full md:w-8/12 px-4 mr-auto ml-auto">
                                {/* <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                  <i className="fas fa-user-friends text-xl"></i>
                </div> */}
                                <h3 className="text-4xl  mb-2 leading-normal">
                                    EDUCATION & AWARENESS
                                </h3>
                                <h4 className="mb-2 font-semibold leading-normal">
                                    Take Action and Learn with SPCA All India
                                </h4>

                                <div className="w-full">
                                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600">
                                        <img
                                            alt="..."
                                            src={BeatTheSummer}
                                            className="w-full align-middle rounded-t-lg"
                                        />
                                        <blockquote className="relative p-2 mb-2">
                                            <svg
                                                preserveAspectRatio="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 583 95"
                                                className="absolute left-0 w-full block"
                                                style={{
                                                    height: "95px",
                                                    top: "-94px"
                                                }}
                                            >
                                                <polygon
                                                    points="-30,95 583,95 583,65"
                                                    className="text-pink-600 fill-current"
                                                ></polygon>
                                            </svg>
                                            <h5 className="text-left font-bold text-white">
                                                BEAT THE HEAT – KEEP ANIMALS SAFE IN SUMMER
                                            </h5>
                                        </blockquote>
                                    </div>
                                </div>

                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                                    Provide clean and well-ventilated animal house with anti-slippery concrete floor having slope for drainage of urine and water. The roof of animal house should be insulator to avoid overheating during summer. Asbestos sheets can be used for this. On very hot days, 4-6 inches thick grass layer of thatch can be put on the roof. These layers act as heat insulators due to which the inside temperature of animal house remains low.
                                </p>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                                    White painting or fixing shining aluminum sheet on roof of animal houses are useful in reflecting sunlight. The minimum height of roof of animal house should necessarily be 10 feet for proper circulation of air and the animals are protected from heat of roof. Cover windows, doors and other open places of animal house with sacks and sprinkle water on these sacks. Fans are also useful in animal house and if possible, arrangements for fitting fans should be made.
                                </p>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                                    The animal house should not be overcrowded. Each animal should get sufficient space as per its requirement. An adult cow and buffalo need 40 and 50 square feet area, respectively. In the open house system per animal requirement is 35 and 40 square meter open area and 7 and 8 square meter covered area for cow and buffaloes, respectively. Animals in the stage of advanced pregnancy and close to parturition should be provided 12 square meters covered and open areas each. It is necessary that breeding bulls are provided 12 square meters covered and 120 square meters open area, where they can have enough exercise to maintain their breeding potential.
                                </p>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                                    Spray cold water three to four times on an animal body if the atmospheric temperature is high. If possible buffaloes can be taken to ponds or pools for bellowing. Experiments show that spraying cold water on animals at noon is useful in improving their production and breeding performances.
                                </p>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                                    Intake of fodder by animals is reduced during summer. When the environmental water temperature is higher than the body temperature, animals eat less dry fodder because much heat is generated from the body on the digestion of dry fodder. Therefore, animals should be provided fodder in the morning or evening only, and as far as possible try to provide much green fodder. This practice has two advantages, first animals relish green fodder and thus consume enough nutritious feed, and second green fodder contains 70-90 percent water providing water from time to time. In case animals are going for grazing, they should be taken to pasture only in the morning and evening. Farmers should sow Mung bean, maize, cowpea, etc in the month of March -April to ensure supply of green fodder during summer. Livestock owners without irrigated land can cut green grass in time and dry and store it. This grass is rich in protein, easy to digest, and nutritious.
                                </p>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                                    In summer, the appetite of animals decreases, and thirst increases. As such provision of sufficient drinking water should be made at least three times a day to animals. In addition, add a little quantity of salt and flour in the drinking water. Provide cool water for drinking. For this, arrange to keep the water tank in a shaded place. Water pipe should not be laid through open sun and attempts should be made for the underground pipeline to prevent the warming of water during day time. Earthen pitchers can be used for providing cool water for animals in summer.
                                </p>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                                    Shady trees are very much necessary nearby animal houses. This tress not only provides shade for animals but also protects them from hot summer winds.
                                </p>

                                <div className="w-full">
                                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600">
                                        <img
                                            alt="..."
                                            src={Vaccination}
                                            className="w-full align-middle rounded-t-lg"
                                        />
                                        <blockquote className="relative p-2 mb-2">
                                            <svg
                                                preserveAspectRatio="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 583 95"
                                                className="absolute left-0 w-full block"
                                                style={{
                                                    height: "95px",
                                                    top: "-94px"
                                                }}
                                            >
                                                <polygon
                                                    points="-30,95 583,95 583,65"
                                                    className="text-pink-600 fill-current"
                                                ></polygon>
                                            </svg>
                                            <h5 className="text-left font-bold text-white">
                                                VACCINATIONS SAVE LIVES
                                            </h5>
                                        </blockquote>
                                    </div>
                                </div>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                                    The term <b className="font-semibold leading-normal">&ldquo;vaccination&rdquo;</b> refers to immunization for the prevention and control of diseases of animals through use of vaccines for specific period of life. Immunization is an integral part of cattle health management. There are many endemic diseases of cattle in India that seriously affect the health, production and performance of dairy animals leading to several economic losses. These diseases can be controlled by using specific vaccines to stimulate antibody response and providing immune protection to the animals for a specific time.
                                </p>
                                <h4 className="mb-2 font-semibold leading-normal">
                                    Difference between an <b>Immunization </b> and a <b>Vaccination</b> :
                                </h4>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                                    Although the two words are often used interchangeably; these are defined as:
                                </p>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                                    <b className="font-semibold leading-normal" >Vaccination</b> : An act of introducing a vaccine into the body to produce immunity/antibodies to a specific disease.
                                </p>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                                    <b className="font-semibold leading-normal" >Immunization</b> : A process by which an animal becomes protected against a disease through vaccination. This term is often used interchangeably with vaccination or inoculation.
                                </p>
                                <h4 className="mb-2 font-semibold leading-normal">
                                    How does vaccine work?
                                </h4>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                                    Most vaccines contain antigen proteins (derived from either virus or bacterium) that prevent disease by stimulating the immune system to produce antibodies to fight the pathogen. A vaccine usually contains the pathogen or parts of it in inactivated or killed form; the body recognizes the pathogen and builds a defence against infection. Giving a small dose of antigen via vaccine improves the speed and efficiency of the animal’s next immune response to the same antigen, as the vaccinated animals’ immune system has a “memory” of that antigen. If an animal encounters the disease itself, there are already antibodies in place to fight the pathogens, and more are produced quickly. If enough antibodies are present to inactivate all the pathogens that invade, the animal won’t get sick, and the invasion stimulates rapid production of more antibodies for future protection. Most vaccines are given once or twice a year, to keep antibody levels high enough to protect against a specific disease.
                                </p>
                                <h4 className="mb-2 font-semibold leading-normal">
                                    Types of commonly used Vaccines in cattle:
                                </h4>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                                    Vaccines are offered in <b className="font-semibold leading-normal" >two</b> basic forms : <b className="font-semibold leading-normal" >killed</b> or <b className="font-semibold leading-normal" >modified</b> live vaccines. Each type has both advantages and disadvantages.
                                </p>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                                    <b className="font-semibold leading-normal" >killed</b> vaccines are generally more stable in storage than modified live products and are safer for pregnant cows, but they usually require two doses (an initial vaccination and a booster) in order to stimulate immunity. Killed vaccines are safer, in general than modified live vaccines.
                                </p>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                                    <b className="font-semibold leading-normal" >Modified</b> live-virus vaccines generally are administered in single doses (except for IBR, which requires boosters, since this vaccine doesn’t give long-lasting immunity) and develop a faster cell-mediated immune response than killed products do. These vaccines trigger a broad immunity that involves both a humoral and a cell-mediated response.
                                </p>
                                <div className="w-full">
                                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600">
                                        <img
                                            alt="..."
                                            src={PreventAnimalPoiling}
                                            className="w-full align-middle rounded-t-lg"
                                        />
                                        <blockquote className="relative p-2 mb-2">
                                            <svg
                                                preserveAspectRatio="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 583 95"
                                                className="absolute left-0 w-full block"
                                                style={{
                                                    height: "95px",
                                                    top: "-94px"
                                                }}
                                            >
                                                <polygon
                                                    points="-30,95 583,95 583,65"
                                                    className="text-pink-600 fill-current"
                                                ></polygon>
                                            </svg>
                                            <h5 className="text-left font-bold text-white">
                                                PREVENT ANIMAL POISONING
                                            </h5>
                                        </blockquote>
                                    </div>
                                </div>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                                    Immediate, life-saving measures may be needed initially. Beyond this, treatment consists of preventing further absorption of the poison, providing supportive treatment, and administering specific antidotes, if available.
                                </p>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                                    Thorough washing with soap and water can usually prevent further absorption of poisons on the skin. If the animal has a long or dense coat, the hair may need to be clipped. For some poisons that have been ingested, vomiting may be induced in dogs and cats. However, vomiting is not recommended if the suspected poison could damage the stomach or esophagus on its way up, if more than a few hours have passed, if the swallowing reflex is absent, if the animal is convulsing, or if there is a risk of aspiration pneumonia (vomited material being inhaled into the lungs). If the animal is unconscious, the stomach may be flushed with a stomach tube, or surgery on the stomach may be needed. Laxatives and medications used to empty the bowels may be recommended in some instances to help remove the poison from the gastrointestinal tract.
                                </p>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                                    If the poison cannot be physically removed, sometimes activated charcoal can be administered by mouth to prevent further absorption by the gastrointestinal tract.
                                </p>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                                    Supportive treatment is often necessary until the poison can be metabolized and eliminated. The type of support required depends on the animal’s condition and may include controlling seizures, maintaining breathing, treating shock, controlling heart problems (for example, irregular heart beats), and treating pain.
                                </p>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                                    In some cases, there is a known antidote for a specific poison.
                                </p>
                                <div className="w-full">
                                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600">
                                        <img
                                            alt="..."
                                            src={Spaying}
                                            className="w-full align-middle rounded-t-lg"
                                        />
                                        <blockquote className="relative p-2 mb-2">
                                            <svg
                                                preserveAspectRatio="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 583 95"
                                                className="absolute left-0 w-full block"
                                                style={{
                                                    height: "95px",
                                                    top: "-94px"
                                                }}
                                            >
                                                <polygon
                                                    points="-30,95 583,95 583,65"
                                                    className="text-pink-600 fill-current"
                                                ></polygon>
                                            </svg>
                                            <h5 className="text-left font-bold text-white">
                                                SPAYING AND NEUTERING
                                            </h5>
                                        </blockquote>
                                    </div>
                                </div>
                                <h4 className="mb-2 font-semibold leading-normal">
                                    A Responsible And Caring Spay And Neuter Service
                                </h4>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                                    For most people, the thought of their puppy undergoing a surgical procedure under sedation can be frightening. We understand that this can be scary for caring dog owners and want to assure you that your puppy will be cared for by the most capable and caring medical professionals.
                                </p>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                                    From the time your puppy enters our doors, it will be treated with compassion and concern for its comfort. Our nurses will treat your puppy as their own. All puppies will receive pain medications before the procedure begins. Our anesthesia and patient care protocols will be tailored to your puppy's breed and size. While your puppy is under anesthesia, our veterinary team will monitor a number of vital signs including body temperature, blood pressure, oxygenation, and anesthesia depth. The surgery will be performed by our veterinarians who have many years of surgical experience.
                                </p>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                                    Postoperative nursing care and pain management medications and therapeutic LASER therapy will be administered to your puppy to ensure that their recovery is painless and they remain closely monitored until we feel it is safe to send them home. Our veterinary team will review postoperative discharge instructions with you at that time so you can feel comfortable bringing your puppy home to complete its recovery.
                                </p>
                                <h4 className="mb-2 font-semibold leading-normal">
                                    Reasons For Spaying And Neutering
                                </h4>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                                    There are many valid reasons to spay and neuter your dog, according to AmericanHumane.org, approximately 3.7 million animals are euthanized at shelters annually, due to the sheer fact that there are not enough willing adopters. Spay and neuter procedures ensure that you are not adding to this number.
                                </p>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                                    For any purebred dog owners who believe that purebred equals profit or desirability, please understand that approximately 25% of all shelter animals are purebred. Unfortunately, there are just not enough good homes for needy dogs, purebred or not.
                                </p>
                                <div className="w-full">
                                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600">
                                        <img
                                            alt="..."
                                            src={CowMeatTrade}
                                            className="w-full align-middle rounded-t-lg"
                                        />
                                        <blockquote className="relative p-2 mb-2">
                                            <svg
                                                preserveAspectRatio="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 583 95"
                                                className="absolute left-0 w-full block"
                                                style={{
                                                    height: "95px",
                                                    top: "-94px"
                                                }}
                                            >
                                                <polygon
                                                    points="-30,95 583,95 583,65"
                                                    className="text-pink-600 fill-current"
                                                ></polygon>
                                            </svg>
                                            <h5 className="text-left font-bold text-white">
                                                HELP STOP THE COW MEAT TRADE
                                            </h5>
                                        </blockquote>
                                    </div>
                                </div>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                                    SPCA All India, an NGO for Animal Welfare is Against Slaughter
                                </p>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                                    Being an NGO for Animal Welfare, SPCA All India Foundation ensures protection to Indian cows from slaughter. Cow in India is considered a holy animal. Lacs of people in India respect and worship cows, and Hindus, it is more revere. The cow is the symbol of divinity and a goddess on earth. The present government has made strict laws for cow slaughter, not only to cows but to all other cattle animals like buffalo, bull, calves, etc. Many NGOs have come forward to help the holy animal and their welfare, like SPCA Foundation, which is doing its best to do all possible things for the cows and cattle. In Vedic terms, the cow is called “Aghanya,” which means cannot be killed. India, a country where 60% of the people live in villages, for them a cow and other cattle is not just the animal; it is their source of life and agriculture.
                                </p>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                                    Constitution of India, Art 48 state that the state shall take steps to preserve and improve the condition of breeds and prohibits cow slaughter and of other cattle animals. And under Art. 48A, it states that the state should establish rules to protect the environment and to safeguard the wildlife of the nation. The ban on cow slaughter was explained because the enactment by the state to protect and improve the environment. The cow dung is rich source of organic manure which helps in improving the quality of soil for agriculture and also neglected the use of fertilizers.
                                </p>
                                <h4 className="mb-2 font-semibold leading-normal">
                                    <b> Article 21</b>
                                </h4>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                                    Justice KS Radhakrishna stated under Article 21 that animals also have honor and dignity, which cannot be arbitrarily deprived of and its rights and privacy have to be respected and protected from unlawful attacks.” It further added that the “Court has a duty under the doctrine of parens patriae to take care of the rights of animals since they are unable to take care of themselves as against human beings.”
                                </p>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                                    Each and every saint of India believes the cow as a sacred, holy, and sign of life as it is closely related to agriculture and livelihood. It is the responsibility of every single person to protect the life of cattle.
                                </p>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                                    SPCA All India, an NGO for Animal Welfare is serving a Livable Environment
                                </p>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                                    SPCA All India is an NGO that assists cow shelters/gaushalas in providing a livable environment for cows. The NGO for animal welfare is also making people aware of relating like-minded people to work for the betterment and welfare of the cows in India. In Delhi-NCR, they are feeding more than 200 cows every day. They are also working to enhance the quality of cattle and are promoting organic agriculture, which is an important need of the hour.
                                </p>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                                    The ruling parting of country BJP, led by Prime Minister Shri Narendra Modi, is very kind to cows, and they have implemented orders for banning of beef in several parts of the country. The government has made strict laws and punishments for beef. The Chief Minister of Yogi Adityanath has ordered to shut all slaughterhouses in the state.
                                </p>
                                {/* endpoint */}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer dark />
        </>
    );
}
