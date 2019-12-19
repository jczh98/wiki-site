# Reflection

## Lambertian

$f_r=\frac{R}{\pi}$

为什么有$\pi$

$\rho_{\mathrm{hd}}$代表半球上总反照度

$\rho_{\mathrm{hd}}\left(\omega_{\mathrm{o}}\right)=\int_{\mathrm{H}^{2}(\mathrm{n})} f_{\mathrm{r}}\left(\mathrm{p}, \omega_{\mathrm{o}}, \omega_{\mathrm{i}}\right)\left|\cos \theta_{\mathrm{i}}\right| \mathrm{d} \omega_{\mathrm{i}}$

因为Lambertian的brdf是常量值所以$\rho_{\mathrm{hd}}=R$,而$f_{\mathrm{r}}$与$\omega_{\mathrm{o}},\omega_{\mathrm{i}},\mathrm{p}$无关，所以Lambertian BRDF等于$\frac{\rho_{\mathrm{hd}}}{\int_{\mathrm{H}^2}\left|\cos\theta_{\mathrm{i}}\right|\mathrm{d}\omega_{\mathrm{i}}}$,对半球积分可以得到$\pi$

关于半球积分

$$
\int_{\mathrm{H}^2}\left|\cos\theta_{\mathrm{i}}\right|\mathrm{d}\omega_{\mathrm{i}} \\
=\int_{\phi=0}^{2\pi}\int_{\theta=0}^{\pi \over 2}\cos\theta\sin\theta\mathrm{d}\theta\mathrm{d}\mathrm{\phi}=\pi
$$

运用$\sin2\theta=2\sin\theta\cos\theta$就很好计算了