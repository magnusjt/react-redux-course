export const municipalitiesWithSelected = state =>
    Object.values(state.municipality.municipalities)
        .map(municipality => ({
            ...municipality,
            selected: municipality.kommunenummer === state.municipality.selectedMunicipality
        }))

export const selectedKindergartens = state =>
    Object.values(state.kindergarten.kindergartens)
        .filter(kindergarten => kindergarten.kommunenummer === state.municipality.selectedMunicipality)