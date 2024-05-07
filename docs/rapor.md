# Kimya Proje Raporu

> Adı-Soyadı: F. Orhan Karaman
> Sınıf-Sube: 11C
> Ders: Kimya
> Konu: Periyodik Tablo Tasarımı
> Tarih: 08.05.2024
> Açıklama: Kimya "Periyodik Tablo Tasarımı" dönem ödevi çerçevesinde geliştirdiğim projem Pablo hakkında öğretmenim tarafından belirtildiği üzere yazılan rapordur.

## Proje Geliştirme Aşamaları

1. Veri Tabanı Araştırması
2. Projenin Planlanması
    2.1 İnternet sitesi sunucusu
    2.2 Kullanılacak programlar
3. İnternet Sitesinin Tasarlanması
    3.1 Elementlerin sıralanması
    3.2 Periyodik tablo biçimi algoritması
    3.3 Tablonun renklendirilmesi
    3.4 Fare hareketi algoritması
    3.5 Özellik penceresi
    3.6 Tıklanabilir elementler
    3.6 3B Bohr atom modeli
4. Son Dokunuşlar

### 1. Veri Tabanı Araştırması

Pablo’nun arayüzü üzerinde çalışılmaya başlanmadan önce gerekli araştırma sonucu açık kaynaklı bir veri tabanı bulunmuş ve projenin ilerleyen safhalarında kullanılmıştır. Bu veri tabanı sayesinde elementlerin sıralamaları, kaynama noktaları, atom numaraları vs. elde edilerek sistemli bir programlama aşamasına zemin oluşturulmuştur.

### 2. Projenin Planlanması

Pablo geliştirilmeden önce belirli planlama aşamalarından geçmiştir.

### 2.1 İnternet sitesi sunucusu

Tasarlanılan internet sitesinin herhangi bir bilgisayardan ulaşılabilmesi için
bütün internete yayın yapan bir sunucu gerekmektedir. Projemizde bu sunucu
Github platformunun [github pages](https://pages.github.com) hizmetinden yararlanılmıştır.

### 2.2 Kullanılacak programlar

Pablo'nun ilk önce Rust programlama dili kullanılarak geliştirilmesi tasarlanmıştır.
Ancak kimi araçların kullanımının getirdiği zorluklar sonucu internet sitesi
tasarımında ilk tercih edilen dil olan Javascript'e geçilmiştir. Bu tercih sonucu
projenin iç çarkları olan yazılımlar, kullanıcıyla çok daha kolay bir şekilde
entegre edilmiştir.

### 3. İnternet Sitesinin Tasarlanması

Pablo internet sitesi geliştirilirken izlenilen yol aşağıda özetlenmiştir.

### 3.1 Elementlerin sıralanması

Elementlerin doğru sırada tanzim edilmesi projemizden beklenilen en temel
özellik olduğundan Pablo, geliştirilmeye elementlerin doğru sırada internet
ortamına aktarmasıyla başlanıdı. Görsel 1'de gösterildiği gibi bir görüntü
ortaya çıkmıştır.

[Görsel 1]

### 3.2 Periyodik tablo biçimi algoritması

Elementlerin doğru olarak ekrana yansıtılmasından sonra projemize periyodik tablo
görüntüsü verecek bir algoritma tasarlandı. Görsel 2'de verildiği üzere
Tablomuzun görüntüsü günümüzdeki klasik şeklini aldı.

[Görsel 2]

### 3.3 Tablonun renklendirilmesi

Bütün periyodik tablolarda olduğu gibi Pablo'nun da ametal, metal, yarı metal ve
alt türlerini renklendirmesi hem bu türlerin ayırt edilmesini hem de görsel
zenginlik sebebi dolayı projemize eklediğimiz yeni bir özellik oldu. Pablo'nun
bu seviyede görüntüsü Görsel 3'te verilmiştir.

[Görsel 3]

### 3.4 Fare hareketi algoritması

Her ne kadar projemiz şu aşamada bir periyodik tablo teşkil etse de Pablo'yu
interaktif hale getirmenin kullanıcı tarafından daha iyi olacağı düşünüldü.
Bunun üzerine (ptable.com)'da olduğu gibi işaretçinin üzerinde bulunduğu
elementin tablonun üzerinde büyükçe görünmesi için gerekli algoritmalar ve
arayüzler programlandı. Tasarımlar sonucu Görsel 4'te verildiği gibi bir görüntü
ortaya çıktı

[Görsel 4]

### 3.5 Özellik penceresi

Kullanıcıya i̇şaretçinin üzerinde bulunduğu element hakkında daha fazla bilgi
vermek için yeni bir özellikler penceresi oluşturuldu. Böylece elementin
türü, kaynama ve erime noktası, orbital dizilimi gibi bilgiler bu pencereye
yansıtılmıştır. Sözü edilen özellik penceresi için Görsel 5'e bakınız

[Görsel 5: Özellik penceresi]

### 3.6 Tıklanabilir elementler

Herhangi bir kullanıcının aradığı bir parametreyi internet sitesinden bulamama
ihtimaline karşın her element, tıklandığı zaman kullanıcıyı o element hakkında
çeşitli bilgiler içeren wikipedia sayfasına iletmektedir. Böylece özellik
penceresinde bulunmayan bilgilere de daha kolay ulaşılabilmektedir.

### 3.7 3B Bohr atom modeli

Pablo'nun kağıda basılmış bir periyodik tablodan daha zengin olması için son
olarak işaretçinin üzerinde bulunduğu elementin Niels Bohr'un modeline uygun
3 boyutlu biçimde işlenecek algoritmalar tasarlandı. Projenin en göz alıcı ve
zaman harcanan bölümü olarak bu aşamada [three.js](https://threejs.org/) kütüphanesi
kullanılmıştır. Gerekli yazılımlar tasarlandıktan sonra X,Y ve Z eksenlerinde
dönerek hareket ettiren parametreler ayarlanmıştır. Bu gelişmeler sonrasında
internet sitesi tamamlandığından dolayı sonuç olarak elde edilen siteye
<https://ptable-rs.github.io> sitesinden adresinden ulaşabilirsiniz. Ayrıca
yazılımlar tasarlanırken ayrı hazırlanan 3B atom işleme algoritmasının sonucuna
<https://ptable-rs.github.io/turning-atom> adresinden ulaşabilirsiniz.

### 4. Son Dokunuşlar

Pablo zaman zaman ufak değişikliklere uğrayarak son halini almıştır. Bu ufak değişikliklere örnek olarak gölge yoğunlukları renk teması gibi ögeler verilebilir.
