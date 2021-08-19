const appConstants: IAppConstants =  {
    navigation: {
        singup: '/singup',
        singin: '/singin',
        resPass: '/reset-password',
        allCandidatesPage: '/all-candidates',
        bids: '/bids',
        messages: '/messages',
        candidate: '/candidate',
        addCandidate: '/candidate/add',
        editCandidate: '/candidate/edit'
    },
    storageNames: {
        filter: 'filter',
        filterPanels: 'panels',
    },
    profileType: {
        company: 'company',
        hr: 'recruter'
    },
}


export interface IAppConstants {
    navigation: {
        singup: string,
        singin: string,
        resPass: string,
        allCandidatesPage: string,
        bids: string,
        messages: string,
        candidate: string,
        addCandidate: string,
        editCandidate: string,
    },
    storageNames: {
        filter: string,
        filterPanels: string,
    },
    profileType: {
        company: 'company',
        hr: 'recruter'
    }
}


export default appConstants