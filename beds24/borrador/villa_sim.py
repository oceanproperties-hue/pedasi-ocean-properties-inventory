# Simulación: precio de la calculadora de Villa Alborán (ocean-properties-pwa, packages/villas/src/alboran.ts)
# frente al modelo de Beds24 (precio por noche por fecha + descuento único por cada 7 noches).
# Tarifas y festivos: semilla de la migración 041 (la tabla real puede haber cambiado).
from datetime import date, timedelta
fest=set()
for l in open(__file__.rsplit('/',1)[0]+'/villa_festivos.txt'):
    d=date.fromisoformat(l.strip()); fest.add(d); fest.add(d-timedelta(1))
SEAS={'baja':('04-16','12-22',1300,1450,1500,1700),'alta':('12-23','04-15',2000,2200,2300,2500)}
def season(d):
    m=d.strftime('%m-%d')
    for k,(a,b,*_) in SEAS.items():
        if (a<=b and a<=m<=b) or (a>b and (m>=a or m<=b)): return k
def night(d,n):
    s=SEAS[season(d)]; f=d in fest
    return (s[3] if f else s[2]) if n>=7 else (s[5] if f else s[4])
tot=mis=0; worst=(0,None); ex=[]
d0=date(2026,10,15)
while d0<=date(2027,12,31):
    for n in range(5,29):
        ps=[night(d0+timedelta(i),n) for i in range(n)]
        k=n//7
        calc=sum(ps)-sum(sorted(ps)[:k])
        b24=sum(ps)-k*SEAS[season(d0)][2]   # descuento único por semana = noche normal de 7+ de la temporada de llegada
        tot+=1
        if calc!=b24:
            mis+=1; diff=b24-calc
            if abs(diff)>abs(worst[0]): worst=(diff,(d0.isoformat(),n))
            if len(ex)<6: ex.append((d0.isoformat(),n,calc,b24))
    d0+=timedelta(1)
print('estancias simuladas',tot,'distintas',mis,f'({100*mis/tot:.2f}%)','peor diferencia',worst)
for e in ex: print(e)
