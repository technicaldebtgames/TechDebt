import React from 'react';

const UnityNoiseMethod = (props) => {

    return (
        <article>
            <h3>A Static Utility Method For Generating Noise Maps In Unity</h3>
            <p className='dropcap'>This article's still under construction. I'm sorry. It's gonna take a bit of typing to get it readable and actually useful. In the meantime, I've got the code I will be going through down below. It's a <a href='https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/static-classes-and-static-class-members'>static method</a> for generating a noise map (based around a built-in <a href='https://mzucker.github.io/html/perlin-noise-math-faq.html'>Perlin noise</a> generating function) with all of the usual parameters in the <a href='https://unity.com/'>Unity3D game engine</a>.</p>
            <code className='code-block'>
                <b><i>C#:</i></b><br/><br/>
                public static class Noise<br/>
                &#123;<br/><br/>
                &nbsp;&nbsp;public static float[,]<br/>&nbsp;&nbsp;&nbsp;&nbsp;GenerateNoiseMap(GameSettings gameSettings)<br/>
                &nbsp;&nbsp;&#123;<br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;int mapWidth = gameSettings.GetMapWidth();<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;int mapHeight = gameSettings.GetMapHeight();<br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;float scale = gameSettings.GetNoiseScale();<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;int octaves = gameSettings.GetOctaves();<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;float persistance = gameSettings.GetPersistance();<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;float lacunarity = gameSettings.GetLacunarity();<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;Vector2 offset = gameSettings.GetNoiseMapOffset();<br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;float[,] noiseMap = new float[mapWidth, mapHeight];<br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;Vector2[] octaveOffsets = new Vector2[octaves];<br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;for (int o = 0; o &#60; octaves; o++)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&#123;<br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;float offsetX = gameSettings.GetOctaveOffsetSeed(o)<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ offset.x;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;float offsetY = gameSettings.GetOctaveOffsetSeed(o)<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ offset.y;<br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;octaveOffsets[o] = new Vector2(offsetX, offsetY);<br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;float maxNoiseHeight = float.MinValue;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;float minNoiseHeight = float.MaxValue;<br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;float halfWidth = mapWidth / 2f;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;float halfheight = mapHeight / 2f;<br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;for (int x = 0; x &#60; mapWidth; x++)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&#123;<br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (int y = 0; y &#60; mapHeight; y++)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;<br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;float amplitude = 1;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;float frequency = 1;<br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;float noiseHeight = 0;<br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (int o = 0; o &#60; octaves; o++)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;<br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;float sampleX = (((float)x - halfWidth) / scale<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* frequency) + octaveOffsets[o].x;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;float sampleY = (((float)y - halfheight) / scale<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* frequency) + octaveOffsets[o].y;<br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;float perlinValue = (Mathf.PerlinNoise(sampleX,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sampleY) * 2) - 1;<br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;noiseHeight += perlinValue * amplitude;<br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;amplitude *= persistance;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;frequency *= lacunarity;<br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (noiseHeight &#62; maxNoiseHeight)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;<br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;maxNoiseHeight = noiseHeight;<br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else if (noiseHeight &#60; minNoiseHeight)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;<br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;minNoiseHeight = noiseHeight;<br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;noiseMap[x, y] = noiseHeight;<br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;for (int x = 0; x &#60; mapWidth; x++)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&#123;<br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (int y = 0; y &#60; mapHeight; y++)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;<br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;noiseMap[x, y] = Mathf.InverseLerp(minNoiseHeight,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;maxNoiseHeight, noiseMap[x, y]);<br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;return noiseMap;<br/><br/>
                &nbsp;&nbsp;&#125;<br/><br/>
                &#125;
            </code>
        </article>
    );

};

export default UnityNoiseMethod;