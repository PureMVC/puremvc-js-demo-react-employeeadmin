//
//  DeptEnum.js
//  PureMVC JS Demo - React EmployeeAdmin
//
//  Copyright(c) 2024 Saad Shams <saad.shams@puremvc.org>
//  Your reuse is governed by the BSD 3-Clause License
//

export const DeptEnum = {

    NONE_SELECTED: { id: 0, name: "---None Selected---" },
    ACCT: { id: 1, name: "Accounting" },
    SALES: { id: 2, name: "Sales" },
    PLANT: { id: 3, name: "Plant" },
    SHIPPING: { id: 4, name: "Shipping" },
    QC: { id: 5, name: "Quality Control" },

    /**
     * @returns {{id: number, name: string}[]}
     */
    get list() {
        return [
            this.ACCT,
            this.SALES,
            this.PLANT,
            this.SHIPPING,
            this.QC
        ];
    },

    /**
     * @returns {{id: number, name: string}[]}
     */
    get comboList() {
        return [this.NONE_SELECTED, ...this.list];
    }

}
