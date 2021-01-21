import React from 'react'


import table_header from "./head/table_header";


export default function Tables() {
    return (
        <div>
            <section>
                <div className="row">
                    <table className="w-100">
                        <tbody>
                            <table_header />
                            <tr>
                                <td width="64">1.</td>
                                <td width="244">To reach Mount Everest</td>
                                <td width="154">Edmund Hillary, Sherpa Tenzing</td>
                                <td width="154">May 29, 1953</td>
                            </tr>
                            <tr>
                                <td width="64">2.</td>
                                <td width="244">To reach North Pole</td>
                                <td width="154">Robert Peary</td>
                                <td width="154">April 6, 1909</td>
                            </tr>
                            <tr>
                                <td width="64">3.</td>
                                <td width="244">To reach South Pole</td>
                                <td width="154">Amundsen</td>
                                <td width="154">December 14, 1911</td>
                            </tr>
                            <tr>
                                <td width="64">4.</td>
                                <td width="244">Religion of the world</td>
                                <td width="154">Hinduism</td>
                                <td width="154">5500 BCE but certainly by c. 2300 BCE</td>
                            </tr>
                            <tr>
                                <td width="64">5.</td>
                                <td width="244">Country to print book</td>
                                <td width="154">China</td>
                                <td width="154">Between 618 and 907 AD</td>
                            </tr>
                            <tr>
                                <td width="64">6.</td>
                                <td width="244">Country to issue paper currency</td>
                                <td width="154">China</td>
                                <td width="154">806 AD</td>
                            </tr>
                            <tr>
                                <td width="64">7.</td>
                                <td width="244">Country to commence competitive examination in civil services</td>
                                <td width="154">China</td>
                                <td width="154">Between 7th to 10th century</td>
                            </tr>
                            <tr>
                                <td width="64">8.</td>
                                <td width="244">President of U.S.A</td>
                                <td width="154">George Washington</td>
                                <td width="154">April 30, 1789</td>
                            </tr>
                            <tr>
                                <td width="64">9.</td>
                                <td width="244">Prime Minister of Britain</td>
                                <td width="154">Robert Walpole</td>
                                <td width="154">1721</td>
                            </tr>
                            <tr>
                                <td width="64">10.</td>
                                <td width="244">Governor-General of the United Nations</td>
                                <td width="154">Trygve Lie (Norway)</td>
                                <td width="154">2 February 1946</td>
                            </tr>
                            <tr>
                                <td width="64">11.</td>
                                <td width="244">Country to win Football World Cup</td>
                                <td width="154">Uruguay</td>
                                <td width="154">July 30, 1930</td>
                            </tr>
                            <tr>
                                <td width="64">12.</td>
                                <td width="244">Country to prepare Constitution</td>
                                <td width="154">U.S.A.</td>
                                <td width="154">June 21, 1788</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    )
}
