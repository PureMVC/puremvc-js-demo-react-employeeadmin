//
//  RoleEnum.js
//  PureMVC JS Demo - React EmployeeAdmin
//
//  Copyright(c) 2024 Saad Shams <saad.shams@puremvc.org>
//  Your reuse is governed by the BSD 3-Clause License
//

export const RoleEnum = {

    NONE_SELECTED: { id: 0, name: "---None Selected---" },
    ADMIN: { id: 1, name: "Administrator" },
    ACCT_PAY: { id: 2, name: "Accounts Payable" },
    ACCT_RCV: { id: 3, name: "Accounts Receivable" },
    EMP_BENEFITS: { id: 4, name: "Employee Benefits" },
    GEN_LEDGER: { id: 5, name: "General Ledger" },
    PAYROLL: { id: 6, name: "Payroll" },
    INVENTORY: { id: 7, name: "Inventory" },
    PRODUCTION: { id: 8, name: "Production" },
    QUALITY_CTL: { id: 9, name: "Quality Control" },
    SALES: { id: 10, name: "Sales" },
    ORDERS: { id: 11, name: "Orders" },
    CUSTOMERS: { id: 12, name: "Customers" },
    SHIPPING: { id: 13, name: "Shipping" },
    RETURNS: { id: 14, name: "Returns" },

    /**
     * @returns {{id: number, name: string}[]}
     */
    get list() {
        return [
            this.ADMIN,
            this.ACCT_PAY,
            this.ACCT_RCV,
            this.EMP_BENEFITS,
            this.GEN_LEDGER,
            this.PAYROLL,
            this.INVENTORY,
            this.PRODUCTION,
            this.QUALITY_CTL,
            this.SALES,
            this.ORDERS,
            this.CUSTOMERS,
            this.SHIPPING,
            this.RETURNS
        ];
    },

    /**
     * @returns {{id: number, name: string}[]}
     */
    get comboList() {
        return [this.NONE_SELECTED, ...this.list];
    }

}
