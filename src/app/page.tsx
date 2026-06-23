import Link from "next/link";


export default function HomePage(){


return (

<div
className="
min-h-screen
"
>


{/* Hero */}


<section
className="
max-w-7xl
mx-auto
p-6
py-20
text-center
"
>


<h1
className="
text-5xl
font-bold
"
>

Build Your Online Vehicle Store

</h1>



<p
className="
mt-6
text-xl
text-gray-600
"
>

Create your showroom online.
Sell cars, bikes and accessories easily.

</p>



<div
className="
mt-8
flex
justify-center
gap-4
"
>


<Link

href="/signup"

className="
border
px-6
py-3
rounded
"

>

Start Free

</Link>



<Link

href="/login"

className="
border
px-6
py-3
rounded
"

>

Login

</Link>


</div>



</section>





{/* Features */}


<section

className="
max-w-6xl
mx-auto
p-6
grid
md:grid-cols-3
gap-6
"

>


<div
className="
border
p-6
rounded-xl
"
>

<h2>
Create Store
</h2>

<p>
Build your showroom in minutes
</p>

</div>



<div
className="
border
p-6
rounded-xl
"
>

<h2>
Manage Vehicles
</h2>

<p>
Add and manage inventory
</p>

</div>




<div
className="
border
p-6
rounded-xl
"
>

<h2>
Get Leads
</h2>

<p>
Receive customer inquiries
</p>

</div>


</section>





{/* CTA */}


<section

className="
text-center
py-20
"

>


<h2
className="
text-3xl
font-bold
"
>

Start selling online today

</h2>


<Link

href="/signup"

className="
inline-block
mt-6
border
px-8
py-3
rounded
"

>

Create Store

</Link>


</section>



</div>

)

}