const itemselector = {

    getCatalogItem(itemNo){
        return '//android.view.ViewGroup[@content-desc="store item"][' + itemNo + ']'
    }

}

export default itemselector