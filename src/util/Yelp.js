const apiKey = "tIpcRaUeTTcB49cpCdWPhLddjyf_56OHpq0QVQai-1eJXqA5_eZwFB7t2YQYtChKM7NGE3-T6pQEtW2-bM_EISu5vwI33D6evClJeAk0S5c7DvvGv2X19JVoW56qYnYx";

const search = async (term, location, sortBy) => {
  const url = `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
  const corsAnywhere = `https://cors-anywhere.herokuapp.com/`;

  try {
    const response = await fetch(
      `${corsAnywhere}${url}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      }
    );
    const jsonResponse = await response.json();

    if (response.ok && jsonResponse.businesses) {
      return jsonResponse.businesses.map(business => {
        const { id, image_url, name, location, categories, rating, review_count } = business;

        return {
          id, rating,
          imageSrc: image_url,
          name: name,
          address: location.address1,
          city: location.city,
          state: location.state,
          zipCode: location.zip_code,
          category: categories[0].title,
          reviewCount: review_count
        };
      });
    } else {
      return [];
    }
  } catch (error) {
    console.log(error);
    return [];
  }
}

export const Yelp = {
  search: search
};
