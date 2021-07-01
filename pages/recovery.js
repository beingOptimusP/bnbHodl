


export default function Recovery() {
  
    return (
     
            <div className="overflow-y-auto h-screen ">
                <div className="max-w-screen-lg mx-auto  bg-white dark:bg-gray-900 py-7 ">

                    <section className="container grid px-6 mx-auto ">
                        <h1 class="mb-3 text-2xl font-semibold text-gray-700 dark:text-gray-200 undefined">TIKI Recovery Program for MOAI Lossholders</h1>
                        <div class="grid gap-6 mb-8 md:grid-cols-2">


                            <div class="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-800 border border-gray-400 shadow">
                                <div class="p-4">
                                    <p class="mb-4 text-3xl font-semibold text-gray-600 dark:text-gray-300">Claimable Balance:</p>
                                    <p class="text-gray-600 text-2xl dark:text-gray-300 text-center">
                                        Your currently claimable BNB balance from the recovery protocol is:
                                        <br />
                                        <br />
                                        <span class="text-yellow-300 font-bold">CONNECT YOUR WALLET</span>
                                        <br />
                                        <br />
                                        click
                                        <button class="text-purple-500">HERE</button>
                                        to claim your pending balance.
                                    </p>
                                </div>

                            </div>
                            <div class="min-w-0 rounded-lg shadow-xs overflow-hidden text-white bg-purple-600 shadow">
                                <div class="p-4">
                                    <p class="mb-4 text-3xl font-semibold">Remaining Balance:</p>
                                    <p class="text-2xl text-center">
                                        You have claimed
                                        <span class="text-yellow-300 font-bold">CONNECT YOUR WALLET</span>
                                        from the recovery protocol. Your total amount to be paid from the recovery protocol is
                                        <span class="text-yellow-300 font-bold">CONNECT YOUR WALLET</span>
                                        .Please continue to check here as the claimable balance grows to meet your full loss.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </section>
                </div>
            </div>

    )
}