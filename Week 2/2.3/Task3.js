const ArkFood = (harga, voucher, jarak, pajak) => {
    console.log(`Harga: ${harga}`)

    if (!voucher) {
        promo = 0
        console.log(`Potongan: ${promo}`)
    } else {
        promo = voucher(harga)
    }

    let printPajak = countPajak(pajak, harga)
    let printJarak = countJarak(jarak, harga)

    let subtotal = (harga - promo) + printPajak + printJarak
    console.log(`Subtotal: ${subtotal}`)
}

const ARKAFOOD5 = (harga) => {
    let potongan
    let minimalPembelian = 50000
    let maximalPotongan = 50000

    if (harga < minimalPembelian) {
        console.log('Minimal pembelian Rp. 50.000')
    } else {
        potongan = 0.5 * harga
        if (potongan < maximalPotongan) {
            console.log(`Potongan: ${potongan}`)
        } else {
            potongan = 50000
            console.log(`Potongan: ${potongan}`)
        }
    }
    return potongan
}

const DITRAKTIRDEMY = (harga) => {
    let potongan
    let minimalPembelian = 25000
    let maximalPotongan = 30000

    if (harga < minimalPembelian) {
        console.log('Minimal pembelian Rp. 25.000')
    } else {
        potongan = 0.6 * harga
        if (potongan < maximalPotongan) {
            console.log(`Potongan: ${potongan}`)
        } else {
            potongan = 30000
            console.log(`Potongan: ${potongan}`)
        }
    }
    return potongan
}

const countPajak = (pajak, harga) => {
    let resPajak
    if (pajak === true) {
        resPajak = 0.05 * harga
        console.log(`Pajak: ${resPajak}`)
    } else {
        resPajak = 0
        console.log(`Pajak: ${resPajak}`)
    }
    return resPajak
}

const countJarak = (jarak) => {
    let ongkir
    if (jarak <= 2) {
        ongkir = 5000
        console.log(`Biaya Pengantaran: ${ongkir}`)
    } else {
        ongkir = ((jarak - 2) * 3000) + 5000
        console.log(`Biaya Pengantaran: ${ongkir}`)
    }
    return ongkir
}

ArkFood(50000, false, 3, true)