let _vendor = {}
export const VendorStore = {
    setVendor: (vendor) => {
        _vendor = vendor
    },
    getVendor: () => {
        return _vendor
    }
}