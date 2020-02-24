# BSDF重要性采样

## Diffuse Reflection
半球方向余弦采样可得出射光$\omega_o$

$p(\omega)=\frac{\cos\theta}{\pi}$

## Microfacet
通常对于微表面方法可以直接采样法线分布函数

因为$\int_{\mathrm{H^2}}D(\omega_h)\cos\theta_h d \omega_h=1$，所以微表面pdf等于$D(\omega_h)\cos\theta_h$
### NDF法线分布函数
#### Beckmann
各向异向性Beckmann-Spizzichino模型
$$
D\left(\omega_{\mathrm{h}}\right)=\frac{\mathrm{e}^{-\tan ^{2} \theta_{\mathrm{h}}\left(\cos ^{2} \phi_{\mathrm{h}} / \alpha_{x}^{2}+\sin ^{2} \phi_{\mathrm{h}} / \alpha_{y}^{2}\right)}}{\pi \alpha_{x} \alpha_{y} \cos ^{4} \theta_{\mathrm{h}}}
$$
因为有$p(\omega_h)=D(\omega_h)\cos\theta_h$, 转换成成球坐标表示$p(\omega_h)\sin\theta_h=p(\theta_h,\phi_h)$,又因为$\theta, \phi$是独立事件，所以$p(\theta_h,\phi_h)=p(\theta_h)p(\phi_h)$,而$p(\phi_h)$是均匀分布等于${1\over 2\pi}$,所以可以算出$p(\theta_h)=2\pi\sin\theta_h\cos\theta_hD(\omega_h)$,于是我们可以求得cdf $P(\theta)=\int p(\theta)\mathrm d\theta=1-\mathrm{e}^{-\tan ^{2} \theta (\frac{\cos^2\phi}{\alpha_x^2}+\frac{\sin^2\phi}{\alpha_y^2})}$,令$\xi_1=P(\theta),\xi_2=P(\phi)$，这样我们就根据inverse sampling求得球坐标上均匀采样的$\theta, \phi$,再将球坐标代换回$\omega_h=(\sin\theta_h\cos\phi_h,\sin\theta_h\sin\phi_h,\cos\theta_h)$就完成了对$\omega_h$方向的重要性采样

有了$\omega_h$就代表有了表面的法线，依据对称根据$\omega_i$就可以直接求得采样后的出射光线$\omega_o$

之前说到对于采样$\omega_h$的pdf等于$D(\omega_h)\cos\theta_h$,那么对于采样$\omega_o$,这两者分布并不相等，需要将$p(\omega_h)$转换到$p(\omega_o)$,$\int p(\theta_o)\mathrm{d}\theta_o=1,\int p(\theta_o)\mathrm{d}\theta_o=1$，只需要考虑${\mathrm{d}\omega_h\over \mathrm d{\omega_o}}$之间的关系就可以变换过去,而从几何角度考虑可得$\theta_o=2\theta_h,\phi_h=\phi_o$
$$
\begin{aligned} \frac{\mathrm{d} \omega_{\mathrm{h}}}{\mathrm{d} \omega_{\mathrm{o}}} &=\frac{\sin \theta_{\mathrm{h}} \mathrm{d} \theta_{\mathrm{h}} \mathrm{d} \phi_{\mathrm{h}}}{\sin 2 \theta_{\mathrm{h}} 2 \mathrm{d} \theta_{\mathrm{h}} \mathrm{d} \phi_{\mathrm{h}}} \\ &=\frac{\sin \theta_{\mathrm{h}}}{4 \cos \theta_{\mathrm{h}} \sin \theta_{\mathrm{h}}} \\ &=\frac{1}{4 \cos \theta_{\mathrm{h}}} \\ &=\frac{1}{4\left(\omega_{\mathrm{o}} \cdot \omega_{\mathrm{h}}\right)} \end{aligned}
$$
所以可得$p(\omega_o)=\frac{p(\omega_h)}{4(\omega_o\cdot\omega_h)}$

#### GGX(Trowbridge-Reitz)

$D\left(\omega_{\mathrm{h}}\right)=\frac{1}{\pi \alpha_{x} \alpha_{y} \cos ^{4} \theta_{\mathrm{h}}\left(1+\tan ^{2} \theta_{\mathrm{h}}\left(\cos ^{2} \phi_{\mathrm{h}} / \alpha_{x}^{2}+\sin ^{2} \phi_{\mathrm{h}} / \alpha_{y}^{2}\right)\right)^{2}}$

采样方法与Beckmann一致

