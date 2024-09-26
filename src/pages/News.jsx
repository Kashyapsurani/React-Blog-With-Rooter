import { useParams } from 'react-router-dom';
import "./News.css"

function News() {
    const { id } = useParams();

    const obj = [
        {
            id: '1',
            image : 'https://static.wixstatic.com/media/597497_39dfa709d3d845eeaf43eb692e93b31b~mv2.jpg/v1/fill/w_642,h_502,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-empty-state.jpg',
            news: 'The term pizza was first recorded in the year 997 AD, in a Latin manuscript from the southern Italian town of Gaeta, in Lazio, on the border with Campania. Raffaele Esposito is often credited for creating modern pizza in Naples. In 2009, Neapolitan pizza was registered with the European Union as a traditional speciality guaranteed  dish. In 2017, the art of making Neapolitan pizza was added to UNESCO s list of intangible cultural heritage. Pizza and its variants are among the most popular foods in the world. Pizza is sold at a variety of restaurants, including pizzerias (pizza specialty restaurants), Mediterranean restaurants, via delivery, and as street food. In Italy, pizza served in a restaurant is presented unsliced, and is eaten with the use of a knife and fork. In casual settings, however, it is typically cut into slices to be eaten while held in the hand. Pizza is also sold in grocery stores in a variety of forms, including frozen or as kits for self-assembly. They are then cooked using a home oven.Records of pizza-like foods can be found throughout ancient history. In the 6th century BC, the Persian soldiers of the Achaemenid Empire during the rule of Darius the Great baked flatbreads with cheese and dates on top of their battle shields and the ancient Greeks supplemented their bread with oils, herbs, and cheese. An early reference to a pizza-like food occurs in the Aeneid, when Celaeno, queen of the Harpies, foretells that the Trojans would not find peace until they are forced by hunger to eat their tables . In Book VII, Aeneas and his men are served a meal that includes round cakes (such as pita bread) topped with cooked vegetables. When they eat the bread, they realize that these are the tables prophesied by Celaeno. In 2023, archeologists discovered a fresco in Pompeii appearing to depict a pizza-like dish among other foodstuffs and staples on a silver platter. Italy s culture minister said it may be a distant ancestor of the modern dish. The first mention of the word pizza comes from a notarial document written in Latin and dating to May 997 AD from Gaeta, demanding a payment of twelve pizzas, a pork shoulder, and a pork kidney on Christmas Day, and 12 pizzas and a couple of chickens on Easter Day Modern pizza evolved from similar flatbread dishes in Naples, Italy, in the 18th or early 19th century.[33] Before that time, flatbread was often topped with ingredients such as garlic, salt, lard, and cheese. It is uncertain when tomatoes were first added and there are many conflicting claims, although it certainly could not have been before the 16th century and the Columbian Exchange. Pizza was sold from open-air stands and out of pizza bakeries until about 1830, when pizzerias in Naples started to have stanze with tables where clients could sit and eat their pizzas on the spot.',
            heding:"Pizza"
        },
        {
            id: '2',
            image : 'https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg',
            news: '1921: White Castle, Wichita, Kansas. Due to widespread anti-German sentiment in the U.S. during World War I, an alternative name for hamburgers was Salisbury steak. Following the war, hamburgers became unpopular until the White Castle restaurant chain marketed and sold large numbers of small 65 mm (2+1⁄2 in) square hamburgers, known as sliders.[citation needed] They created five holes in each patty, which helped them cook evenly and eliminated the need to flip the burger. In 1995, White Castle began selling frozen hamburgers in convenience stores and vending machines 1923: Kewpee Hamburgers, or Kewpee Hotels, Flint, Michigan. Kewpee was the second hamburger chain and peaked at 400 locations before World War II. Many of these were licensed but not strictly franchised. Many closed during WWII. Between 1955 and 1967, another wave of restaurants closed or changed names. In 1967, the Kewpee licensor moved the company to a franchise system. Currently, only five locations exist.1926: White Tower Hamburgers 1927: Little Tavern 1930s: White Castle (II; run by Henry Cassada) 1931: Krystal[35]1936: Big Boy. In 1937, Bob Wian created the double-deck hamburger at his stand in Glendale, California. Big Boy would become the name of the hamburger, the mascot, and the restaurants. Big Boy expanded nationally through regional franchising and subfranchising. Primarily operating as drive-in restaurants in the 1950s, interior dining gradually replaced curb service by the early 1970s. Many franchises have closed or operate independently, but at the remaining American restaurants, the Big Boy double-deck hamburger remains the signature item 1940: McDonald s restaurant, San Bernardino, California, was opened by Richard and  Maurice McDonald. Their introduction of the "Speedee Service System" in 1948 established the principles of the modern fast-food restaurant. The McDonald brothers began franchising in 1953. In 1961, Ray Kroc (the supplier of their multi-mixer milkshake machines) purchased the company from the brothers for $2.7 million and a 1.9% royalty.[36] Hamburgers are often a feature of fast food restaurants. In the United States, the hamburger patties served by major fast food chains are usually mass-produced in factories and frozen for delivery to the site.[37] These hamburgers are thin and of uniform thickness, differing from the traditional American hamburger prepared in homes and conventional restaurants, which is thicker and prepared by hand from ground beef. Most American hamburgers are round, but some fast-food chains, such as Wendy s, sell square-cut hamburgers. Hamburgers in fast food restaurants are usually grilled on a flat top, but some firms, such as Burger King, use a gas flame grilling process. At conventional American restaurants, hamburgers may be ordered "rare" but normally are served medium-well or well-done for food safety reasons. Fast food restaurants do not usually offer this option.',
            heding:"Burger"
        },
        {
            id: '3',
            news: 'News 3'
        }
    ];

    const newsItem = obj.find(val => val.id === id);

    return (
        <>
            <div className="wrappers" >
            <img src={newsItem.image} alt="" width={"100%"} height={"500px"}/>
            <h1>{newsItem.heding}</h1>
                <p>{newsItem.news}</p>

            </div>           
        </>
    );
}

export default News;
