first_name="swaasthik"
last_name="servegar"
full_name=first_name+ ''  '' +last_name
print(full_name)

message="warning !"
print(message.upper())
print(message.lower())
print(message.strip()*2)
print(message.replace("warnning","error"))

name='''swasthik said "hello"
deepak said " hello"
'''
print(name)
name="swasthikservegar"
print (name[3])#index
print(name[2:]) 
print(name[:6]) 
print(name[-2])
print(name[-4])
print(name[::3])
#operators
a=10
b=100
print(a<b)
print(a>b)

s="swasthik"
s2="swasthiks"
print("c"in s)
print("s" in s2)

l=["a","b","c","d"]
print(l[0:3])

genders=("male","female","male")
print(genders(1))
birthday={
    "swasthik":"08/11/2004",
    "diya":"17/02/2004"
}
item2={
    "name":"sugar",
    "weight":20,
    "price":10.2
}
print(item2)
#if else 
x=12
if x%2==10:
    print("yes x is 10")