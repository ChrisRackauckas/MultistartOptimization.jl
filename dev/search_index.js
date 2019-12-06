var documenterSearchIndex = {"docs":
[{"location":"#MultistartOptimization-1","page":"MultistartOptimization","title":"MultistartOptimization","text":"","category":"section"},{"location":"#","page":"MultistartOptimization","title":"MultistartOptimization","text":"MinimizationProblem\nLocationValue\nNLoptLocalMethod\nlocal_minimization\nTikTak\nmultistart_minimization","category":"page"},{"location":"#MultistartOptimization.MinimizationProblem","page":"MultistartOptimization","title":"MultistartOptimization.MinimizationProblem","text":"struct MinimizationProblem{F, T}\n\nWrapper for a minimization problem.\n\nFields\n\nobjective\nThe function to be minimized.\nlower_bounds\nLower bounds (a vector of real numbers).\nupper_bounds\nUpper bounds (a vector of real numbers).\n\n\n\n\n\n","category":"type"},{"location":"#MultistartOptimization.LocationValue","page":"MultistartOptimization","title":"MultistartOptimization.LocationValue","text":"struct LocationValue{T<:(AbstractArray{#s12,1} where #s12<:Real), S<:Real}\n\nA location-value pair.\n\nFields\n\nlocation\nLocation (a vector of real numbers).\nvalue\nThe value of the objective at location.\n\n\n\n\n\n","category":"type"},{"location":"#MultistartOptimization.NLoptLocalMethod","page":"MultistartOptimization","title":"MultistartOptimization.NLoptLocalMethod","text":"NLoptLocalMethod(algorithm; options...)\n\n\nA wrapper for algorithms supported by NLopt. Used to construct the corresponding optimization problem.\n\nSee the NLopt documentation for the options. Defaults are changed slightly.\n\n\n\n\n\n","category":"type"},{"location":"#MultistartOptimization.local_minimization","page":"MultistartOptimization","title":"MultistartOptimization.local_minimization","text":"local_minimization(local_method, minimization_problem, x)\n\n\nSolve minimization_problem using local_method, starting from x. Return a LocationValue.\n\n\n\n\n\n","category":"function"},{"location":"#MultistartOptimization.TikTak","page":"MultistartOptimization","title":"MultistartOptimization.TikTak","text":"TikTak(quasirandom_N; keep_ratio, θ_min, θ_max, θ_pow)\n\n\nThe “TikTak” multistart method, as described in Arnoud, Guvenen, and Kleineberg (2019).\n\nThis implements the multistart part, can be called with arbitrary local methods, see multistart_minimization.\n\nArguments\n\nquasirandom_N: the number of quasirandom points for the first pass (using a Sobol sequence).\n\nKeyword arguments\n\nkeep_ratio: the fraction of best quasirandom points which are kept\nθ_min and θ_max clamp the weight parameter, θ_pow determines the power it is raised to.\n\nThe defaults are from the paper cited above.\n\n\n\n\n\n","category":"type"},{"location":"#MultistartOptimization.multistart_minimization","page":"MultistartOptimization","title":"MultistartOptimization.multistart_minimization","text":"multistart_minimization(multistart_method, local_method, minimization_problem)\n\n\nSolve minimization_problem by using local_method within multistart_method.\n\n\n\n\n\n","category":"function"}]
}
