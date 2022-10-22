import { ADMIN_SESSION } from "../constant/base.constant"

export const SecurityManager = {

    vendorloggedIn: () => {
        try {
            const session = JSON.parse(localStorage.getItem(ADMIN_SESSION) || '') 
            if (session && session.token.length > 0 && session.vendorloggedIn) {
                return true
            } else {
                return false
            }
        } catch (err) {
            return false
        }
    },

    adminloggedIn: () => {
        try {
            const session = JSON.parse(localStorage.getItem(ADMIN_SESSION) || '') 
            if (session && session.token.length > 0 && session.adminloggedIn) {
                return true
            } else {
                return false
            }
        } catch (err) {
            return false
        }
    },

    setSession(session) {
        localStorage.setItem(ADMIN_SESSION, JSON.stringify(session))
    },

    // getToken: (): string => {
    //     const session = JSON.parse(localStorage.getItem(ADMIN_SESSION) || '{}') as Session
    //     if (session && session.token && session.token.length > 0) {
    //         return session.token
    //     } else {
    //         return ''
    //     }
    // },

    // getUid: (): string => {
    //     const session = JSON.parse(localStorage.getItem(ADMIN_SESSION) || '{}') as Session
    //     if (session && session.id && session.id.length > 0) {
    //         return session.id
    //     } else {
    //         return ''
    //     }
    // },

    logout() {
        try {
            localStorage.removeItem(ADMIN_SESSION)
            window.location.reload()
        } catch (err) {
            console.error(err)
        }
    }
}