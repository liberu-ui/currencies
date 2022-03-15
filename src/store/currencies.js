
export const state = {
    currencies: null,
    countries: [],
    defaultCurrency: null,
};

export const getters = {
    currency: state => currencyId => state.currencies
        .find(({ id }) => id === currencyId),
    countryCurrency: state => (countryId) => {
        const { currencyCode } = state.countries
            .find(({ id }) => id === countryId);
        return state.currencies
            .find(({ code }) => code === currencyCode);
    },
};

export const mutations = {
    currencies: (state, currencies) => {
        state.currencies = currencies;
        state.defaultCurrency = currencies.find(currency => currency.isDefault);
    },
    countries: (state, countries) => (state.countries = countries),
};

