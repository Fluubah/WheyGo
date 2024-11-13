// ProteinOption constructor function
function ProteinOption(flavor, lactoseFree, intendedUse, priceRange, name, link) {
    this.flavor = flavor;
    this.lactoseFree = lactoseFree;
    this.intendedUse = intendedUse;
    this.priceRange = priceRange;
    this.name = name;
    this.link = link;
}

// List of protein options (all options included)
const options = [
    // Vanilla, Lactose-Free, Muscle Gain
    new ProteinOption(
        "Vanilla",
        true,
        "Muscle Gain",
        "High",
        "Momentous Essential Grass-Fed Whey Protein",
        "https://www.amazon.com/dp/B07T7XBKRP"
    ),
    new ProteinOption(
        "Vanilla",
        true,
        "Muscle Gain",
        "Medium",
        "Kaged Whey Protein Isolate Powder",
        "https://www.amazon.com/dp/B0CKG6WYMC"
    ),
    new ProteinOption(
        "Vanilla",
        true,
        "Muscle Gain",
        "Low",
        "Nutrex Research Whey Protein Powder, Vanilla Muscle Infusion",
        "https://www.amazon.com/dp/B086GCRCYR"
    ),

    // Vanilla, Lactose-Free, Weight Loss
    new ProteinOption(
        "Vanilla",
        true,
        "Weight Loss",
        "High",
        "Garden of Life Sport Organic Plant-Based Protein Powder",
        "https://www.iherb.com/pr/garden-of-life-sport-organic-plant-based-protein-vanilla-28-4-oz-806-g/68815"
    ),
    new ProteinOption(
        "Vanilla",
        true,
        "Weight Loss",
        "Medium",
        "Transparent Labs Organic Vegan Protein",
        "https://www.transparentlabs.com/products/organic-vegan"
    ),
    new ProteinOption(
        "Vanilla",
        true,
        "Weight Loss",
        "Low",
        "Dymatize Elite 100% Whey",
        "https://www.amazon.com/dp/B000QSTBNS"
    ),

    // Vanilla, Not Lactose-Free, Muscle Gain
    new ProteinOption(
        "Vanilla",
        false,
        "Muscle Gain",
        "High",
        "XWERKS Grow Protein Powder",
        "https://xwerks.com/products/grow"
    ),
    new ProteinOption(
        "Vanilla",
        false,
        "Muscle Gain",
        "Medium",
        "Optimum Nutrition Gold Standard 100% Whey Protein",
        "https://www.amazon.com/dp/B000QSTBNS"
    ),
    new ProteinOption(
        "Vanilla",
        false,
        "Muscle Gain",
        "Low",
        "Nutricost Whey Protein Concentrate",
        "https://www.amazon.com/dp/B01F8P0S0U"
    ),

    // Vanilla, Not Lactose-Free, Weight Loss
    new ProteinOption(
        "Vanilla",
        false,
        "Weight Loss",
        "High",
        "Ritual Essential Protein Daily Shake 18+",
        "https://ritual.com/products/essential-protein-daily-shake-18"
    ),
    new ProteinOption(
        "Vanilla",
        false,
        "Weight Loss",
        "Medium",
        "MyProtein Impact Whey Isolate",
        "https://www.myprotein.com/sports-nutrition/impact-whey-isolate/10530911.html"
    ),
    new ProteinOption(
        "Vanilla",
        false,
        "Weight Loss",
        "Low",
        "Amfit Nutrition Whey Protein",
        "https://www.amazon.com/dp/B07D3ZQ2Y5"
    ),

    // Chocolate, Lactose-Free, Muscle Gain
    new ProteinOption(
        "Chocolate",
        true,
        "Muscle Gain",
        "High",
        "Legion Whey+ Chocolate Whey Isolate",
        "https://www.amazon.com/dp/B00XRDV5GE"
    ),
    new ProteinOption(
        "Chocolate",
        true,
        "Muscle Gain",
        "Medium",
        "Jacked Factory Authentic ISO",
        "https://www.amazon.com/dp/B07Y5WZ8RT"
    ),
    new ProteinOption(
        "Chocolate",
        true,
        "Muscle Gain",
        "Low",
        "Nutrex Research Whey Protein Powder, Chocolate Muscle Infusion",
        "https://www.amazon.com/dp/B07Y5WZ8RT"
    ),

    // Chocolate, Lactose-Free, Weight Loss
    new ProteinOption(
        "Chocolate",
        true,
        "Weight Loss",
        "High",
        "Momentous Essential Grass-Fed Whey Protein",
        "https://www.amazon.com/dp/B07T7XBKRP"
    ),
    new ProteinOption(
        "Chocolate",
        true,
        "Weight Loss",
        "Medium",
        "Transparent Labs Whey Protein Isolate",
        "https://www.transparentlabs.com/products/grass-fed-whey-protein-isolate"
    ),
    new ProteinOption(
        "Chocolate",
        true,
        "Weight Loss",
        "Low",
        "Dymatize ISO100 Hydrolyzed Protein Powder",
        "https://www.amazon.com/dp/B00JJ1Y1RG"
    ),

    // Chocolate, Not Lactose-Free, Muscle Gain
    new ProteinOption(
        "Chocolate",
        false,
        "Muscle Gain",
        "High",
        "XWERKS Grow Protein Powder",
        "https://xwerks.com/products/grow"
    ),
    new ProteinOption(
        "Chocolate",
        false,
        "Muscle Gain",
        "Medium",
        "Optimum Nutrition Gold Standard 100% Whey Protein",
        "https://www.amazon.com/dp/B000QSNYGI"
    ),
    new ProteinOption(
        "Chocolate",
        false,
        "Muscle Gain",
        "Low",
        "Nutricost Whey Protein Concentrate",
        "https://www.amazon.com/dp/B01F8P0S0U"
    ),

    // Chocolate, Not Lactose-Free, Weight Loss
    new ProteinOption(
        "Chocolate",
        false,
        "Weight Loss",
        "High",
        "Garden of Life Sport Organic Plant-Based Protein Powder",
        "https://www.iherb.com/pr/garden-of-life-sport-organic-plant-based-protein-chocolate-28-4-oz-806-g/68816"
    ),
    new ProteinOption(
        "Chocolate",
        false,
        "Weight Loss",
        "Medium",
        "MyProtein Impact Whey Isolate",
        "https://www.myprotein.com/sports-nutrition/impact-whey-isolate/10530911.html"
    ),
    new ProteinOption(
        "Chocolate",
        false,
        "Weight Loss",
        "Low",
        "Amfit Nutrition Whey Protein",
        "https://www.amazon.com/dp/B07D3ZQ2Y5"
    ),

    // Unflavored, Lactose-Free, Muscle Gain
    new ProteinOption(
        "Unflavored",
        true,
        "Muscle Gain",
        "High",
        "AGN Roots Grass-Fed Whey",
        "https://www.amazon.com/dp/B07MTQ5QHY"
    ),
    new ProteinOption(
        "Unflavored",
        true,
        "Muscle Gain",
        "Medium",
        "Isopure Unflavored Whey Protein Isolate",
        "https://www.amazon.com/dp/B002TG3QPO"
    ),
    new ProteinOption(
        "Unflavored",
        true,
        "Muscle Gain",
        "Low",
        "Nutricost Whey Protein Isolate",
        "https://www.amazon.com/dp/B01N6M6DH8"
    ),

    // Unflavored, Lactose-Free, Weight Loss
    new ProteinOption(
        "Unflavored",
        true,
        "Weight Loss",
        "High",
        "Momentous Essential Grass-Fed Whey Protein",
        "https://www.amazon.com/dp/B07T7XBKRP"
    ),
    new ProteinOption(
        "Unflavored",
        true,
        "Weight Loss",
        "Medium",
        "Transparent Labs Grass-Fed Whey Protein Isolate",
        "https://www.transparentlabs.com/products/grass-fed-whey-protein-isolate"
    ),
    new ProteinOption(
        "Unflavored",
        true,
        "Weight Loss",
        "Low",
        "NOW Sports Nutrition Whey Protein Isolate",
        "https://www.amazon.com/dp/B0015AQL1Q"
    ),

    // Unflavored, Not Lactose-Free, Muscle Gain
    new ProteinOption(
        "Unflavored",
        false,
        "Muscle Gain",
        "High",
        "Naked Whey 100% Grass-Fed Whey",
        "https://www.amazon.com/dp/B00NCRU3E2"
    ),
    new ProteinOption(
        "Unflavored",
        false,
        "Muscle Gain",
        "Medium",
        "Optimum Nutrition Platinum Hydrowhey",
        "https://www.amazon.com/dp/B002DYJ0AK"
    ),
    new ProteinOption(
        "Unflavored",
        false,
        "Muscle Gain",
        "Low",
        "Bodylogix Natural Whey Protein Powder",
        "https://www.amazon.com/dp/B074W1XHYD"
    ),

    // Unflavored, Not Lactose-Free, Weight Loss
    new ProteinOption(
        "Unflavored",
        false,
        "Weight Loss",
        "High",
        "Ritual Essential Protein Daily Shake 18+",
        "https://ritual.com/products/essential-protein-daily-shake-18"
    ),
    new ProteinOption(
        "Unflavored",
        false,
        "Weight Loss",
        "Medium",
        "MyProtein Impact Whey Protein Unflavored",
        "https://www.myprotein.com/sports-nutrition/impact-whey-protein/10530911.html"
    ),
    new ProteinOption(
        "Unflavored",
        false,
        "Weight Loss",
        "Low",
        "Bulk Whey Protein Powder",
        "https://www.amazon.com/dp/B004C3YJ5K"
    )
];

// Handle form submission
document.getElementById('proteinForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get user inputs
    const flavor = document.getElementById('flavor').value;
    const lactoseFree =
        document.querySelector('input[name="lactoseFree"]:checked').value ===
        'yes';
    const intendedUse = document.getElementById('intendedUse').value;
    const priceRange = document.getElementById('priceRange').value;

    // Filter options based on user inputs
    const filteredOptions = options.filter(
        (option) =>
            option.flavor === flavor &&
            option.lactoseFree === lactoseFree &&
            option.intendedUse === intendedUse &&
            option.priceRange === priceRange
    );

    // Display results
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if (filteredOptions.length === 0) {
        resultsDiv.innerHTML =
            '<p>No matching protein options found. Try adjusting your preferences.</p>';
    } else {
        resultsDiv.innerHTML = '<h2>Here are the best options for you:</h2>';
        filteredOptions.forEach((option) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            optionDiv.innerHTML = `
                <p><strong>${option.name}</strong></p>
            `;
            resultsDiv.appendChild(optionDiv);
        });
    }

    // Smooth scroll to results
    resultsDiv.scrollIntoView({ behavior: 'smooth' });
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navContainer = document.querySelector('.nav-container');

menuToggle.addEventListener('click', () => {
    navContainer.classList.toggle('active');
});
