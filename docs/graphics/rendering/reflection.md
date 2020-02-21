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

## Fresnell公式
### Dielectric-Dielectric
$r_s=\frac{n_i\cos\theta_i-n_t\cos\theta_t}{n_i\cos\theta_i+n_t\cos\theta_t}$

$r_p=\frac{n_t\cos\theta_i-n_i\cos\theta_t}{n_t\cos\theta_i+n_i\cos\theta_t}$

$Fr=\frac{r_s^2+r_p^2}{2}$

Snell law : $n_i\sin\theta_i=n_t\sin\theta_t$可以用来简化参数

### Dielectric-Conductor
$r_s=\frac{n_i\cos\theta_i-(n_t-\mathbf{i}k_t)\cos\theta_t}{n_i\cos\theta_i+(n_t-\mathbf{i}k_t)\cos\theta_t}$

$r_p=\frac{(n_t-\mathbf{i}k_t)\cos\theta_i-n_i\cos\theta_t}{(n_t-\mathbf{i}k_t)\cos\theta_i+n_i\cos\theta_t}$

$Fr=\frac{r_s^2+r_p^2}{2}=\frac{R_s+R_p}{2}$

$$
\begin{array}{l}{a^{2}=\frac{1}{2 n_{i}^{2}}\left(\sqrt{\left(n_{t}^{2}-k_{t}^{2}-n_{i}^{2} \sin ^{2} \theta\right)^{2}+4 n_{t}^{2} k_{t}^{2}}+n_{t}^{2}-k_{t}^{2}-n_{i}^{2} \sin ^{2} \theta\right)} \\ {b^{2}=\frac{1}{2 n_{i}^{2}}\left(\sqrt{\left(n_{t}^{2}-k_{t}^{2}-n_{i}^{2} \sin ^{2} \theta\right)^{2}+4 n_{t}^{2} k_{t}^{2}}-n_{t}^{2}+k_{t}^{2}+n_{i}^{2} \sin ^{2} \theta\right)} \\ {R_{s}=\frac{a^{2}+b^{2}-2 a \cos \theta+\cos ^{2} \theta}{a^{2}+b^{2}+2 a \cos \theta+\cos ^{2} \theta}} \\ {R_{p}=R_{s} \frac{a^{2}+b^{2}-2 a \sin \theta \tan \theta+\sin ^{2} \theta \tan ^{2} \theta}{\theta \tan ^{2} \theta}}\end{array}
$$

实际计算中取$\eta=\frac{\eta_t}{\eta_i}$, $\eta_k={k_t\over n_i}$, $\theta=\theta_i$

$$
\begin{array}{l}{a^{2}=\frac{1}{2}\left(\sqrt{\left(\eta^{2}-\eta_{k}^{2}-\sin ^{2} \theta\right)^{2}+4 \eta^{2} \eta_{k}^{2}}+\eta^{2}-\eta_{k}^{2}-\sin ^{2} \theta\right)} \\ {b^{2}=\frac{1}{2}\left(\sqrt{\left(\eta^{2}-\eta_{k}^{2}-\sin ^{2} \theta\right)^{2}+4 \eta^{2} \eta_{k}^{2}}-\eta^{2}+\eta_{k}^{2}+\sin ^{2} \theta\right)}\end{array}
$$

用下列式子可以简化计算

$$
\begin{array}{l}{a^{2}+b^{2}=\sqrt{\left(\eta^{2}-\eta_{k}^{2}-\sin ^{2} \theta\right)^{2}+4 \eta^{2} \eta_{k}^{2}}} \\ {\tan \theta=\frac{\sin \theta}{\cos \theta}} \\ {R_{p}=R_{s} \frac{\cos ^{2} \theta\left(a^{2}+b^{2}\right)-2 a \cos \theta \sin ^{2} \theta+\sin ^{4} \theta}{\cos ^{2} \theta\left(a^{2}+b^{2}\right)+2 a \cos \theta \sin ^{2} \theta+\sin ^{4} \theta}}\end{array}
$$

### Fresnel Schlick’s approximation
$Fr=R(0)+(1-R(0))(1-\cos \theta)^{5}$

对于conductor $R(0)=\frac{\left(n_{t}-n_{i}\right)^{2}+k_{t}^{2}}{\left(n_{t}+n_{i}\right)^{2}+k_{t}^{2}}=\frac{(\eta-1)^{2}+\eta_{k}^{2}}{(\eta+1)^{2}+\eta_{k}^{2}}$

对于dielectric $R(0)=\frac{\left(n_{t}-n_{i}\right)^{2}}{\left(n_{t}+n_{i}\right)^{2}}=\frac{(\eta-1)^{2}}{(\eta+1)^{2}}$

## reference
- Memo on Fresnel equations. [https://seblagarde.wordpress.com/2013/04/29/memo-on-fresnel-equations/](https://seblagarde.wordpress.com/2013/04/29/memo-on-fresnel-equations/)