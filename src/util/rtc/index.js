export const sendCandidateToPeer = (candidate, connection, rtcCalleeNumber) => {
    const exchangePayload = {
        to: rtcCalleeNumber,
        type: "candidate",
        candidate
    }
    connection.emit('exchange',exchangePayload)
}

export const sendOfferToPeer = (offer ,connection, rtcCalleeNumber) => {
    const exchangePayload = {
        to: rtcCalleeNumber,
        type: "offer",
        offer
    }
    connection.emit('exchange',exchangePayload)
}

export const sendAnswerToPeer = (answer, connection, rtcCalleeNumber) => {
    const exchangePayload = {
        to: rtcCalleeNumber,
        type: "answer",
        answer
    }
    connection.emit('exchange',exchangePayload)
}

export const startCall = (actions,onIceCandidateCallback) => {
    actions.getSocketConnection().then(connection => {
        actions.getOwnStream().then(stream => {
            const local={enable:true,stream:stream};
            const remote = {enable:true,stream:null}
            actions.initStream(local, remote).then(ok => {
                actions.onIceCandidate(connection, this._on_ice_candidate_cb).then( (c, s) => {
                    actions.createOffer(connection).then( (offer, sc)=>{
                        this._create_offer_cb(offer,sc)
                    } )
                    .catch( e => {
                        console.error(e)
                    } )
                } )
                .catch( e => {
                    console.error(e)
                } )
            })
            .catch( e => {
                console.error(e)
            } )
        })
        .catch( e => {
            console.error(e)
        } )
        
    })
    .catch( e => {
        console.error(e)
    } )
}

export const makePeerAvailableForCall = () => {
    
}