<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2575.2">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 4.8px 36.0px; text-indent: -36.0px; font: 14.0px Helvetica; color: #111111; -webkit-text-stroke: #111111; background-color: #ffffff}
    p.p2 {margin: 0.0px 0.0px 4.8px 36.0px; text-indent: -36.0px; font: 14.0px Helvetica; color: #111111; -webkit-text-stroke: #111111; background-color: #ffffff; min-height: 17.0px}
    span.s1 {font-kerning: none}
  </style>
</head>
<body>
<p class="p1"><span class="s1">import React, { useState } from 'react';</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function calculateTaxes({</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>revenue,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>expenses,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>startupCosts,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>salary,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>rdNonWageExpenses,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>personal401k,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>employer401k,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>additionalCredits</span></p>
<p class="p1"><span class="s1">}) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>// Placeholder calculation logic</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>const payrollTax = salary * 0.0765;<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>const baseProfit = revenue - expenses - salary - employer401k - startupCosts - payrollTax;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>const rdCredit = 0.14 * (salary + rdNonWageExpenses); // 14% R&amp;D credit</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>const approximateTax = baseProfit * 0.20; // 20% hypothetical tax rate</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>const totalCredits = rdCredit + additionalCredits;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>const netTax = Math.max(approximateTax - totalCredits, 0);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>return {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>netTax,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>payrollTax,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>rdCredit,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>approximateTax,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>baseProfit</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>};</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function calculateOptimalSalary({</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>revenue,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>expenses,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>startupCosts,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>rdNonWageExpenses,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>personal401k,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>employer401k,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>minSalary,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>maxSalary,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>additionalCredits</span></p>
<p class="p1"><span class="s1">}) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>let bestSalary = minSalary;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>let bestTax = Infinity;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>let bestCalculation = {};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>for (let s = minSalary; s &lt;= maxSalary; s += 1000) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const calculation = calculateTaxes({</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>revenue: Number(revenue),</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>expenses: Number(expenses),</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>startupCosts: Number(startupCosts),</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>salary: s,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>rdNonWageExpenses: Number(rdNonWageExpenses),</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>personal401k: Number(personal401k),</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>employer401k: Number(employer401k),</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>additionalCredits: Number(additionalCredits),</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>});</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (calculation.netTax &lt; bestTax) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>bestTax = calculation.netTax;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>bestSalary = s;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>bestCalculation = calculation;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>return { bestSalary, ...bestCalculation };</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function App() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>const [revenue, setRevenue] = useState('');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>const [expenses, setExpenses] = useState('');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>const [startupCosts, setStartupCosts] = useState('');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>const [rdNonWageExpenses, setRdNonWageExpenses] = useState('');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>const [personal401k, setPersonal401k] = useState('');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>const [employer401k, setEmployer401k] = useState('');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>const [minSalary, setMinSalary] = useState('');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>const [maxSalary, setMaxSalary] = useState('');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>const [additionalCredits, setAdditionalCredits] = useState('');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>const [result, setResult] = useState(null);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>const handleCalculate = () =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const calculation = calculateOptimalSalary({</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>revenue,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>expenses,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>startupCosts,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>rdNonWageExpenses,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>personal401k,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>employer401k,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>minSalary: Number(minSalary),</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>maxSalary: Number(maxSalary),</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>additionalCredits,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>});</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>setResult(calculation);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>return (</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>&lt;div style={{ maxWidth: '600px', margin: 'auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>&lt;h1&gt;S Corp Salary Optimization Calculator&lt;/h1&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>&lt;p&gt;Enter your details below to estimate an optimal salary.&lt;/p&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>&lt;div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}&gt;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>&lt;label&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>Total Annual Business Revenue:</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>&lt;input type="number" value={revenue} onChange={(e) =&gt; setRevenue(e.target.value)} /&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>&lt;/label&gt;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>&lt;label&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>Total Annual Business Expenses (excl. salary, employer 401k, payroll taxes):</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>&lt;input type="number" value={expenses} onChange={(e) =&gt; setExpenses(e.target.value)} /&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>&lt;/label&gt;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>&lt;label&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>Non-Wage R&amp;D Expenses:</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>&lt;input type="number" value={rdNonWageExpenses} onChange={(e) =&gt; setRdNonWageExpenses(e.target.value)} /&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>&lt;/label&gt;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>&lt;label&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>Startup Costs (deduction):</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>&lt;input type="number" value={startupCosts} onChange={(e) =&gt; setStartupCosts(e.target.value)} /&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>&lt;/label&gt;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>&lt;label&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>Personal 401(k) Contribution (Employee Deferral):</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>&lt;input type="number" value={personal401k} onChange={(e) =&gt; setPersonal401k(e.target.value)} /&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>&lt;/label&gt;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>&lt;label&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>Employer 401(k) Contribution:</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>&lt;input type="number" value={employer401k} onChange={(e) =&gt; setEmployer401k(e.target.value)} /&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>&lt;/label&gt;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>&lt;label&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>Reasonable Salary Range (Min):</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>&lt;input type="number" value={minSalary} onChange={(e) =&gt; setMinSalary(e.target.value)} /&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>&lt;/label&gt;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>&lt;label&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>Reasonable Salary Range (Max):</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>&lt;input type="number" value={maxSalary} onChange={(e) =&gt; setMaxSalary(e.target.value)} /&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>&lt;/label&gt;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>&lt;label&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>Additional Credits (e.g. $5K startup credit):</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>&lt;input type="number" value={additionalCredits} onChange={(e) =&gt; setAdditionalCredits(e.target.value)} /&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>&lt;/label&gt;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>&lt;button onClick={handleCalculate}&gt;Calculate Optimal Salary&lt;/button&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>{result &amp;&amp; (</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>&lt;div style={{ marginTop: '20px' }}&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>&lt;h2&gt;Recommended Salary: ${result.bestSalary.toLocaleString()}&lt;/h2&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>&lt;p&gt;Net Tax: ${result.netTax.toFixed(2)}&lt;/p&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>&lt;p&gt;Approx. Tax Before Credits: ${result.approximateTax.toFixed(2)}&lt;/p&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>&lt;p&gt;Payroll Tax: ${result.payrollTax.toFixed(2)}&lt;/p&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>&lt;p&gt;R&amp;D Credit: ${result.rdCredit.toFixed(2)}&lt;/p&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>&lt;p&gt;Base Profit After Expenses and Salary: ${result.baseProfit.toFixed(2)}&lt;/p&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>&lt;/div&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>)}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>&lt;/div&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>);</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">export default App;</span></p>
</body>
</html>
